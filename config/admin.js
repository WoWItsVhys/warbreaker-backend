module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b4dbad35-6caa-4f84-be56-90d0d3bc2fdf'),
  },
});
