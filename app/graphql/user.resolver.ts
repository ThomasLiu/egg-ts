import { Context } from 'egg'
import { Resolver, Query, Mutation, Args, Ctx } from 'type-graphql'
import { User } from '../model/user'
import { DefaultQuery, WillSaveObj } from './customBaseType'


@Resolver(() => User)
export class UserResolver {

  @Query(() => [User], { description: '查询用户列表' })
  async getUsers(@Args() { filter, order, page = 1 }: DefaultQuery, @Ctx() ctx: Context): Promise<User[]> {
    const { offset, limit } = ctx.getQueryByPage(page)

    const { rows: list } = await ctx.model.User.findAndCountAll({
      ...filter,
      offset,
      limit,
      order,
    })
    return list
  }
  // {
  //   getUsers(filter:{ where:{ name:"ccc"}}, order: [["created_at","DESC"]], page: 1){
  //     id
  //     name
  //     password
  //     created_at
  //   }
  // }

  @Mutation(() => User)
  async addUser(@Args() { body }: WillSaveObj, @Ctx() ctx: Context): Promise<User> {
    console.info('UserResolver addUser', body)
    return await ctx.model.User.create(body)
  }
  // mutation {
  //   addUser(body: { name: "aaa", password: "bb"}){
  //     id,
  //     name,
  //     password,
  //     created_at
  //   }
  // }
}
