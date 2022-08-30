import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export interface IData {
    purpose: {
        typeOf: AssetTransactionType;
        id: string;
    };
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.CancelMoneyTransfer;
    data: IData;
}

/**
 * 通貨転送中止タスクファクトリー
 */
export type ITask = IExtendId<IAttributes>;