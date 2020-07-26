import * as crypto from 'crypto'
import { Context } from 'egg'


export default {
  createPassword(this: Context) {
    const { cryptoSecret } = this.config
    return (password: string) => {
      console.info('createPassword cryptoSecret', cryptoSecret, 'password', password)
      const hmac = crypto.createHash(cryptoSecret)
      hmac.update(password)
      return hmac.digest('hex')
    }
  },
  getQueryByPage(this: Context, page = 1) {
    console.info('getQueryByPage this', this)
    console.info('getQueryByPage page', page)
    const limit = this.app.config.limit || 2
    const offset = (page - 1) * limit
    return {
      offset,
      limit,
    }
  },
}
