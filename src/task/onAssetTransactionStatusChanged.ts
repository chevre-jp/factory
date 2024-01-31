import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { OrderType } from '../order';
import { IProject } from '../project';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';
import { TransactionStatusType } from '../transactionStatusType';

export interface IPurposeAsOrder {
    typeOf: OrderType.Order;
    confirmationNumber: string;
    orderNumber: string;
}
export interface IObjectAsPayTransaction {
    typeOf: AssetTransactionType.Pay;
    transactionNumber: string;
    status: TransactionStatusType.Confirmed | TransactionStatusType.Canceled | TransactionStatusType.Expired;
    // 確定時の決済方法区分指定(2023-08-29~)
    object?: {
        paymentMethod?: { identifier?: string };
    };
}
export interface IObjectAsReserveTransaction {
    typeOf: AssetTransactionType.Reserve | 'COAReserveTransaction';
    transactionNumber: string;
    status: TransactionStatusType.Confirmed;
}
export interface IObjectAsMoneyTransferTransaction {
    typeOf: AssetTransactionType.MoneyTransfer;
    transactionNumber: string;
    status: TransactionStatusType.Confirmed;
}
export interface IObjectAsRegisterServiceTransaction {
    typeOf: AssetTransactionType.RegisterService;
    transactionNumber: string;
    status: TransactionStatusType.Confirmed;
}
export type IObject =
    IObjectAsPayTransaction | IObjectAsReserveTransaction | IObjectAsMoneyTransferTransaction | IObjectAsRegisterServiceTransaction;
export interface IData {
    project: Pick<IProject, 'id' | 'typeOf'>;
    object: IObject;
    purpose: IPurposeAsOrder;
    useOnOrderStatusChanged: boolean;
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.OnAssetTransactionStatusChanged;
    data: IData;
}
/**
 * 資産取引ステータス変更時タスク
 */
export type ITask = IExtendId<IAttributes>;
