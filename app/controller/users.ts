
import { Controller } from 'egg'


export default class UsersController extends Controller {

  public async create() {
    const { ctx } = this
    const createRule = {
      name: { type: 'string' },
      password: { type: 'string' },
    }
    // 校验参数
    ctx.validate(createRule)

    const result = await ctx.model.User.create(ctx.request.body)
    ctx.body = {
      code: 0,
      message: 'success',
      data: result,
    }
  }
}

