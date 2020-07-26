// import { Application } from 'egg'
import { Table, Column, Model, PrimaryKey, IsUUID, Default, Sequelize } from 'sequelize-typescript'

import { defOptions } from './model'

@Table({ ...defOptions })
export class User extends Model<User> {

  @IsUUID(4)
  @PrimaryKey
  @Default(Sequelize.UUIDV4)
  @Column
  id: string;

  @Column
  name: string

  @Column
  password: string
}


export default () => User
