import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595729943058_6383'

  // add your egg config in here
  config.middleware = []

  // add your special config in here
  const database = process.env.EGG_MYSQL_SERVER_ENV_MYSQL_DATABASE || `${appInfo.name}`

  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    pageSize: 30,
    databaseName: database,
    cryptoSecret: config.keys,
    security: {
      csrf: {
        ignore: () => true,
      },
    },
    cluster: {
      listen: {
        port: 7001,
        // hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
        // path: '/var/run/egg.sock',
      },
    },

    sequelize: {
      dialect: 'mysql',
      host: process.env.EGG_MYSQL_SERVER_PORT_3306_TCP_ADDR || '127.0.0.1',
      port: process.env.EGG_MYSQL_SERVER_PORT_3306_TCP_PORT || '3306',
      database,
      username: 'root',
      password: process.env.EGG_MYSQL_SERVER_ENV_MYSQL_ROOT_PASSWORD || '123456',
      timezone: '+08:00',
    },

    redis: {
      client: {
        port: process.env.EGG_REDIS_SERVER_PORT_6379_TCP_PORT || 6379, // Redis port
        host: process.env.EGG_REDIS_SERVER_PORT_6379_TCP_ADDR || '127.0.0.1', // Redis host
        password: process.env.EGG_REDIS_SERVER_ENV_PASSWORD || '123456',
        db: 0,
      },
    },

    typeGraphQL: {
      router: '/graphql',
      dateScalarMode: 'isoDate',
    },
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  }
}
