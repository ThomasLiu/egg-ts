import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  validate: {
    package: 'egg-validate',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize-ts',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  sessionRedis: {
    enable: true,
    package: 'egg-session-redis',
  },
  typeGraphQL: {
    enable: true,
    package: 'egg-type-graphql',
  },
}

export default plugin
