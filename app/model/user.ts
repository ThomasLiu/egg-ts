import { Table, Column, Model, PrimaryKey, IsUUID, Default, Sequelize } from 'sequelize-typescript'
import { Field, ObjectType, ID } from 'type-graphql'

import { defOptions } from './model'

@ObjectType({ description: 'This is User Type' })
@Table({ ...defOptions })
export class User extends Model<User> {

  @Field(() => ID, { description: 'id' })
  @IsUUID(4)
  @PrimaryKey
  @Default(Sequelize.UUIDV4)
  @Column
  id: string;

  @Field({ nullable: true, description: '账号' })
  @Column
  name: string

  @Field({ nullable: true, description: '密码' })
  @Column
  password: string

  @Field({ nullable: true, description: '创建时间' })
  created_at: Date

}


export default () => User
