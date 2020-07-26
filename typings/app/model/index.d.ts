// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportModel from '../../../app/model/model';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Model: ReturnType<typeof ExportModel>;
    User: ReturnType<typeof ExportUser>;
  }
}
