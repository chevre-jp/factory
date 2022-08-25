// import * as AccountFactory from '../../../account';
// import * as ActionFactory from '../../../action';
// import { ActionType } from '../../../actionType';
// import * as MoneyTransferTransactionFactory from '../../../assetTransaction/moneyTransfer';
import { AssetTransactionType } from '../../../assetTransactionType';
// import { IMonetaryAmount } from '../../../monetaryAmount';
import { ISimpleOrder } from '../../../order';
// import { IPropertyValue } from '../../../propertyValue';
import { TransactionType } from '../../../transactionType';
import * as ConfirmActionFactory from '../confirm';

// export type IAgent = ActionFactory.IParticipant;
// export type IRecipient = ActionFactory.IParticipant;
/**
 * 匿名ロケーションインターフェース
 */
// export import IAnonymousLocation = AccountFactory.action.moneyTransfer.IAnonymousLocation;
// export type AvailablePaymentMethodType = string;
/**
 * 決済方法インターフェース
 */
// export interface IPaymentMethodLocation {
//     /**
//      * The identifier for the account the payment will be applied to.
//      */
//     accountId?: string;
//     /**
//      * 決済方法タイプ
//      */
//     typeOf: AvailablePaymentMethodType;
//     /**
//      * 決済方法名
//      */
//     name: string;
//     /**
//      * An identifier for the method of payment used (e.g.the last 4 digits of the credit card).
//      */
//     paymentMethodId: string;
//     /**
//      * The total amount due.
//      */
//     totalPaymentDue?: IMonetaryAmount;
//     /**
//      * 追加特性
//      */
//     additionalProperty: IPropertyValue<string>[];
// }
// export import IPaymentCard = MoneyTransferTransactionFactory.IPaymentCard;
// export import IFromLocationBeforeStart = MoneyTransferTransactionFactory.IFromLocationBeforeStart;
/**
 * 転送元あるいは転送先の場所インターフェース
 */
// export type ILocation = IAnonymousLocation | IPaymentMethodLocation | IPaymentCard;
export interface IObject {
    // 必要最低限に最適化(2022-05-16~)
    pendingTransaction: {
        /**
         * 資産取引ID
         */
        id: string;
    };
    transactionNumber: string;
    typeOf: AssetTransactionType.MoneyTransfer;
}
export type IResult = any;
export interface ITransactionPurpose {
    typeOf: TransactionType;
    id: string;
}
export type IPurpose = ITransactionPurpose | ISimpleOrder;
export interface IAttributes extends ConfirmActionFactory.IAttributes<IObject, IResult> {
    purpose: IPurpose;
    /**
     * 金額
     * 不要なので廃止(2022-05-16~)
     */
    // amount: IMonetaryAmount;
    /**
     * 転送元
     * 不要なので廃止(2022-05-16~)
     */
    // fromLocation: ILocation | IFromLocationBeforeStart;
    /**
     * 転送先
     * 不要なので廃止(2022-05-16~)
     */
    // toLocation: ILocation;
}
/**
 * 通貨転送確定アクション
 */
export type IAction = ConfirmActionFactory.IAction<IAttributes>;
