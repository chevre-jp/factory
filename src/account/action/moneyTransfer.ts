import { AccountType } from '../../accountType';
import * as ActionFactory from '../../action';
import { ActionStatusType } from '../../actionStatusType';
import { ActionType } from '../../actionType';
import { IMonetaryAmount } from '../../monetaryAmount';
import { SortType } from '../../sortType';
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
/**
 * ソート条件
 */
export interface ISortOrder {
    /**
     * 開始日時
     */
    startDate?: SortType;
}
export interface IProjectSearchConditions {
    id?: {
        $eq?: string;
        $ne?: string;
    };
}
/**
 * 検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    // 廃止(2022-10-22~)
    // accountNumber?: string;
    actionStatus?: {
        $in?: ActionStatusType[];
    };
    amount?: {
        /**
         * 通貨
         */
        currency?: { $eq?: string };
    };
    location?: {
        /**
         * 口座番号
         */
        accountNumber?: { $eq?: string };
        /**
         * 口座種別
         */
        typeOf?: { $eq?: string };
    };
    project?: IProjectSearchConditions;
    purpose?: {
        /**
         * 取引タイプ
         */
        typeOf?: { $eq?: string };
        /**
         * 取引ID
         */
        id?: { $eq?: string };
        /**
         * 取引番号
         */
        transactionNumber?: { $eq?: string };
        /**
         * 取引識別子
         */
        identifier?: { $eq?: string };
    };
    startDate?: {
        $gte?: Date;
        $lte?: Date;
    };
}
