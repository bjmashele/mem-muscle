module.exports = app => {
  const auth = require("../controllers/auth.controller.js");
  const passportService = require("../services/passport");
  const passport = require("passport");

  const requireAuth = passport.authenticate("jwt", { session: false });
  const requireSignin = passport.authenticate("local", { session: false });

  //Authentication routes
  app.get("/", requireAuth, function(req, res) {
    res.send({ hi: "there" });
  });
  app.post("/api/auth/signin", requireSignin, auth.signin);
  app.post("/api/auth/signup", auth.signup);
};
