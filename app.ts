import { Application, IBoot } from 'egg'

export default class FooBoot implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app
    console.log('constructor')
  }

  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
    console.log('configWillLoad')
  }

  configDidLoad() {
    // Config, plugin files have loaded.
    console.log('configDidLoad')
  }

  async didLoad() {
    // All files have loaded, start plugin here.
    console.log('didLoad')
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready.
    console.log('willReady')
    if (process.env.NODE_ENV !== 'test') {
      await this.app.model.sync({
        // force: true,
        alter: true,
      })
    }

  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
    console.log('didReady')
  }

  async serverDidReady() {
    // Server is listening.
    console.log('serverDidReady')
  }

  async beforeClose() {
    // Do some thing before app close.
    console.log('beforeClose')
  }
}
