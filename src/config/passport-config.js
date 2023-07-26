import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import userServices from "../services/user.services.js";
LocalStrategy.Strategy;

async function initialize(passport, email, id) {
  const authenticateUser = async (email, password, done) => {
    const user = await userServices.getByEmail(email);
    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, userServices.getUserById(id));
  });
}

export default initialize;
