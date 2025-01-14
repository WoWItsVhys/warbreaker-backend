const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host: 'localhost',
        port: '5432',
        database: 'strapi',
        user: 'strapi',
        password: 'local'
      },
      debug: false,
      ssl: {
        rejectUnauthorized: false,
      }
    },

  };
};
