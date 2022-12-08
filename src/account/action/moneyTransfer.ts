import { AccountType } from '../../accountType';
import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { IMonetaryAmount } from '../../monetaryAmount';
import { IThing } from '../../thing';
import { AccountTransactionType } from '../transactionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 口座以外の匿名ロケーション
 */
export interface IAnonymousLocation extends Pick<IThing, 'identifier' | 'name'> {
    /**
     * ロケーションタイプ
     */
    typeOf: string;
    /**
     * ロケーションID
     */
    id?: string;
}
/**
 * 口座
 */
export interface IAccount {
    typeOf: AccountType.Account;
    /**
     * 通貨
     */
    accountType: string;
    /**
     * 口座番号
     */
    accountNumber: string;
    /**
     * 口座名義
     */
    name?: string;
}
/**
 * 転送元あるいは転送先
 */
export type ILocation = IAnonymousLocation | IAccount;
export type IObject = any;
export type IResult = any;
export type IPotentialActions = any;
/**
 * アクションの目的
 * ここでは、取引が目的となる
 */
export interface IPurpose {
    /**
     * 取引タイプ
     */
    typeOf: AccountTransactionType;
    /**
     * 取引ID
     */
    id: string;
    /**
     * 取引番号
     */
    transactionNumber: string;
    /**
     * 取引識別子
     */
    identifier?: string;
}
export type IAmount = Pick<IMonetaryAmount, 'typeOf' | 'currency' | 'value'>;
export interface IAttributes extends ActionFactory.IAttributes<ActionType.MoneyTransfer, IObject, IResult> {
    identifier?: string;
    typeOf: ActionType.MoneyTransfer;
    /**
     * どんな取引によって発生した転送アクションか
     */
    purpose: IPurpose;
    /**
     * 金額
     */
    amount: IAmount;
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
