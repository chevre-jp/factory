/**
 * 通貨転送タスクファクトリー
 */
import { IAttributes as IMoneyTransferActionAttributes } from '../account/action/moneyTransfer';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export interface IData {
    actionAttributes: IMoneyTransferActionAttributes;
}

export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.AccountMoneyTransfer;
    data: IData;
}

export type ITask = IExtendId<IAttributes>;
