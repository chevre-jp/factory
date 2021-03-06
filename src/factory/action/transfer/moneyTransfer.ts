import * as AccountFactory from '../../account';
import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import AssetTransactionType from '../../assetTransactionType';
import { IMonetaryAmount } from '../../monetaryAmount';

/**
 * 進行中取引インターフェース
 */
export interface IPendingTransaction {
    typeOf: AccountFactory.transactionType;
    id: string;
    identifier?: string;
    transactionNumber?: string;
}

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 匿名ロケーションインターフェース
 */
export import IAnonymousLocation = AccountFactory.action.moneyTransfer.IAnonymousLocation;

/**
 * 決済カードインターフェース
 */
export interface IPaymentCard {
    typeOf: string;
    identifier: string;
    accessCode?: string;
}

/**
 * 転送元あるいは転送先の場所インターフェース
 */
export type ILocation = IAnonymousLocation | IPaymentCard;

export interface IObject {
    typeOf: AccountFactory.transactionType;
    transactionNumber?: string;
    /**
     * 取引承認済の場合、進行中取引
     */
    pendingTransaction?: IPendingTransaction;
}

export type IResult = any;

export type IPotentialActions = any;

export interface ITransactionPurpose {
    typeOf: AssetTransactionType;
    id: string;
    identifier?: string;
}

export type IPurpose = ITransactionPurpose;

export interface IAttributes extends ActionFactory.IAttributes<ActionType.MoneyTransfer, IObject, IResult> {
    typeOf: ActionType.MoneyTransfer;
    purpose: IPurpose;
    /**
     * 金額
     */
    amount: IMonetaryAmount;
    /**
     * 転送元
     */
    fromLocation: ILocation;
    /**
     * 転送先
     */
    toLocation: ILocation;
}

export type IAction = ActionFactory.IAction<IAttributes>;
