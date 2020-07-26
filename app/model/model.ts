import { Sequelize, IDefineScopeOptions } from 'sequelize-typescript'


export const defOptions = {
  timestamps: true, // 自动维护时间戳 [ created_at、updated_at ]
  underscored: true, // 不使用驼峰样式自动添加属性，而是下划线样式 [ createdAt => created_at ]
  // // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
  // // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
  freezeTableName: false,
  deletedAt: true,
}

export const defScopes: IDefineScopeOptions = {
  // 定义全局作用域，使用方法如: .scope('onlyTrashed') or .scope('onlyTrashed1', 'onlyTrashed12') [ 多个作用域 ]
  onlyTrashed: {
    // 只查询软删除数据
    where: {
      deleted_at: {
        [Sequelize.Op.not]: null,
      },
    },
  },
}

