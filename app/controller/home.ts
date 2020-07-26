import { Controller } from 'egg'
import localResult from '../../volume/data.json'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    ctx.body = await ctx.service.test.sayHi(`egg ${process.env.NODE_ENV}`)
  }


  public async test() {
    const { ctx, app } = this

    const local_result = localResult
    const redis_result = await app.redis.get('helloworld') || '1'
    app.redis.set('helloworld', `${parseInt(redis_result, 10) + 1}`, 'EX', 100)
    ctx.body = { redis_result, local_result }
  }
}
