import * as pecorino from '@pecorino/factory';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IMonetaryAmount } from '../../monetaryAmount';
import TransactionType from '../../transactionType';

/**
 * 進行中取引インターフェース
 */
export type IPendingTransaction = pecorino.transaction.deposit.ITransaction
    | pecorino.transaction.transfer.ITransaction
    | pecorino.transaction.withdraw.ITransaction;

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 匿名ロケーションインターフェース
 */
export import IAnonymousLocation = pecorino.action.transfer.moneyTransfer.IAnonymousLocation;

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
    typeOf: pecorino.transactionType;
    transactionNumber?: string;
    /**
     * 取引承認済の場合、進行中取引
     */
    pendingTransaction?: IPendingTransaction;
}

export type IResult = any;

export type IPotentialActions = any;

export interface ITransactionPurpose {
    typeOf: TransactionType;
    id: string;
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
