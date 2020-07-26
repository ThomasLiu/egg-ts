const appName =
  process.env.EGG_MYSQL_SERVER_ENV_MYSQL_DATABASE || "official_website_api";

const config = {
  username: "root",
  password: process.env.EGG_MYSQL_SERVER_ENV_MYSQL_ROOT_PASSWORD || "123456",
  host: process.env.EGG_MYSQL_SERVER_PORT_3306_TCP_ADDR || "127.0.0.1",
  port: process.env.EGG_MYSQL_SERVER_PORT_3306_TCP_PORT || "3306",
  dialect: "mysql",
  dialectOptions: {
    bigNumberStrings: true,
  },
  database: appName,
};

module.exports = {
  development: {
    ...config,
  },
  test: {
    ...config,
  },
  production: {
    ...config,
  },
};
