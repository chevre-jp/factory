import { IAttributes as IConfirmPayActionAttributes, IPurpose as IConfirmPayPurpose } from '../action/interact/confirm/pay';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export type IPurpose = IConfirmPayPurpose & {
    confirmationNumber: string;
};
export interface IData extends IConfirmPayActionAttributes {
    purpose: IPurpose;
    /**
     * OrderPaymentDue->OrderProcessing処理を実行するかどうかのオプションを追加(2023-08-23~)
     */
    processOrder?: boolean;
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.ConfirmPayTransaction;
    data: IData;
}
/**
 * 決済資産取引確定タスク
 */
export type ITask = IExtendId<IAttributes>;
