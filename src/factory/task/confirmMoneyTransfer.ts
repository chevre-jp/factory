import { IAttributes as IMoneyTransferActionAttributes } from '../action/interact/confirm/moneyTransfer';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export type IData = IMoneyTransferActionAttributes;
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.ConfirmMoneyTransfer;
    data: IData;
}

/**
 * 通貨転送タスクファクトリー
 */
export type ITask = IExtendId<IAttributes>;
