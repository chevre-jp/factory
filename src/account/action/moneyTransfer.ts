import { AccountType } from '../../accountType';
import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { IMonetaryAmount } from '../../monetaryAmount';
import { AccountTransactionType } from '../transactionType';

export type IAgent = Pick<ActionFactory.IParticipant, 'name' | 'typeOf'>;
export type IRecipient = Pick<ActionFactory.IParticipant, 'name' | 'typeOf'>;
/**
 * 口座以外の匿名ロケーション
 */
export interface IAnonymousLocation {
    name?: string;
    /**
     * ロケーションタイプ
     */
    typeOf: string;
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
    // identifier?: string;
}
export type IAmount = Pick<IMonetaryAmount, 'typeOf' | 'currency' | 'value'>;
export interface IAttributes extends Pick<
    ActionFactory.IAttributes<ActionType.MoneyTransfer, never, never>,
    'project' | 'description'
> {
    agent: IAgent;
    recipient?: IRecipient;
    // identifier?: string;
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
