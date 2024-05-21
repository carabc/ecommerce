// const authorize = (...roles) => {
//   // check if the req.user is undefined
//   if (req.user === undefined) {
//     // if it is, return 401
//     return res.status(401).json({
//       message: "Unauthenticated",
//     });
//   }
//   // if it is not, check if the user is an admin
//   if (req.user.RoleName === "Admin") {
//     // if the user is an admin, call next()
//     next();
//   } else {
//     // if the user is not an admin, return 403
//     return res.status(403).json({
//       message: "Unauthorized",
//     });
//   }
// };

const authorize =
  (...roles) =>
  (req, res, next) => {
    // check if the req.user is undefined
    if (req.user === undefined) {
      // if it is, return 401
      return res.status(401).json({
        message: "Unauthenticated",
      });
    }

    // check if the user has a role that is in the roles array
    if (roles.length > 0 && !roles.includes(req.user.RoleName)) {
      // if the user does not have a role that is in the roles array, return 403
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    // if the user has a role that is in the roles array, call next()
    next();
  };

module.exports = authorize;
