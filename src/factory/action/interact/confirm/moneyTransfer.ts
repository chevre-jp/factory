import * as AccountFactory from '../../../account';
import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import * as MoneyTransferTransactionFactory from '../../../assetTransaction/moneyTransfer';
import { AssetTransactionType } from '../../../assetTransactionType';
import { IMonetaryAmount } from '../../../monetaryAmount';
import { ISimpleOrder } from '../../../order';
import { IPropertyValue } from '../../../propertyValue';
import { TransactionType } from '../../../transactionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IPendingTransaction = MoneyTransferTransactionFactory.ITransaction;

/**
 * 匿名ロケーションインターフェース
 */
export import IAnonymousLocation = AccountFactory.action.moneyTransfer.IAnonymousLocation;

export type AvailablePaymentMethodType = string;

/**
 * 決済方法インターフェース
 */
export interface IPaymentMethodLocation {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 決済方法タイプ
     */
    typeOf: AvailablePaymentMethodType;
    /**
     * 決済方法名
     */
    name: string;
    /**
     * An identifier for the method of payment used (e.g.the last 4 digits of the credit card).
     */
    paymentMethodId: string;
    /**
     * The total amount due.
     */
    totalPaymentDue?: IMonetaryAmount;
    /**
     * 追加特性
     */
    additionalProperty: IPropertyValue<string>[];
}

export import IPaymentCard = MoneyTransferTransactionFactory.IPaymentCard;
export import IFromLocationBeforeStart = MoneyTransferTransactionFactory.IFromLocationBeforeStart;

/**
 * 転送元あるいは転送先の場所インターフェース
 */
export type ILocation = IAnonymousLocation | IPaymentMethodLocation | IPaymentCard;

export interface IObject {
    pendingTransaction: IPendingTransaction;
    typeOf: AssetTransactionType.MoneyTransfer;
}
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
// tslint:disable-next-line:no-empty-interface
export interface IResult {
}
export interface ITransactionPurpose {
    typeOf: TransactionType;
    id: string;
}

export type IPurpose = ITransactionPurpose | ISimpleOrder;

export interface IAttributes extends ActionFactory.IAttributes<ActionType.ConfirmAction, IObject, IResult> {
    typeOf: ActionType.ConfirmAction;
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
    /**
     * 金額
     */
    amount: IMonetaryAmount;
    /**
     * 転送元
     */
    fromLocation: ILocation | IFromLocationBeforeStart;
    /**
     * 転送先
     */
    toLocation: ILocation;
}

export type IAction = ActionFactory.IAction<IAttributes>;
