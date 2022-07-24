// import { ITransaction as ICancelReservation } from '../assetTransaction/cancelReservation';
// import { ITransaction as IMoneyTransfer } from '../assetTransaction/moneyTransfer';
// import { ITransaction as IPay } from '../assetTransaction/pay';
// import { ITransaction as IRefund } from '../assetTransaction/refund';
// import { ITransaction as IRegisterService } from '../assetTransaction/registerService';
// import { ITransaction as IReserve } from '../assetTransaction/reserve';
import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { OrganizationType } from '../organizationType';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

// export type IObject = ICancelReservation | IMoneyTransfer | IPay | IRefund | IRegisterService | IReserve;
export interface IObject {
    project: { id: string; typeOf: OrganizationType.Project };
    typeOf: AssetTransactionType;
    id: string;
    transactionNumber: string;
}
export interface IData {
    object: IObject;
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.DeleteAssetTransaction;
    data: IData;
}
/**
 * 資産取引削除タスク
 */
export type ITask = IExtendId<IAttributes>;