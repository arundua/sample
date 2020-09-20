module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
    url: "http://35.202.53.94:1337",
  admin: {
      url: "http://35.202.53.94:1337/admin",
    auth: {
      secret: env('ADMIN_JWT_SECRET', '89750b2a0d99eeb5c73c01c42cd25386'),
    },
  },
});
