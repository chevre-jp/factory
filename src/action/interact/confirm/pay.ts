import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import { IInstrument } from '../../authorize/paymentMethod/any';
import * as ConfirmActionFactory from '../confirm';

export type IPurpose = ISimpleOrder;
export interface IPayAssetTransaction {
    typeOf: AssetTransactionType.Pay;
    /**
     * 決済取引番号
     */
    transactionNumber: string;
    // 確定時の決済方法区分指定(2023-08-29~)
    object?: {
        paymentMethod?: { identifier?: string };
    };
}
export type IObject = IPayAssetTransaction[];
export type IResult = any;
export interface IAttributes extends ConfirmActionFactory.IAttributes<IObject, IResult> {
    instrument: IInstrument;
    // potentialActions?: any;
    purpose: IPurpose;
}
/**
 * 決済取引確定アクション
 */
export type IAction = ConfirmActionFactory.IAction<IAttributes>;
