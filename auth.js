const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;


passport.use(new LinkedInStrategy({
  clientID: '78q7c2jn42bwgt',
  clientSecret: 'MqqmXCVup8Xd15BW',
  callbackURL: "http://localhost:3000/linkedin/callback",
  // passReqToCallback: true,
  scope: ['r_emailaddress', 'r_liteprofile'],
  state: true
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
