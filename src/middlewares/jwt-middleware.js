const JWT = require('passport-jwt')
const User = require('../models/user');

const JwtStrategy = JWT.Strategy;
const ExtractJWT = JWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'twitter_secret',
};

const passpaortAuth = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);
      if (!user) {
        done(null, false);
      } else {
        done(null, user);
      }
    })
  );
};

module.exports = { passpaortAuth };
