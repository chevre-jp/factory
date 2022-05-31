import { IAttributes as IReturnActionAttributes } from '../action/transfer/return/reserveTransaction';
import { IExtendId } from '../autoGenerated';
import * as WebAPIFactory from '../service/webAPI';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export type IData = IReturnActionAttributes<WebAPIFactory.Identifier>;
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.ReturnReserveTransaction;
    data: IData;
}
/**
 * 予約資産取引返却タスク
 */
export type ITask = IExtendId<IAttributes>;
