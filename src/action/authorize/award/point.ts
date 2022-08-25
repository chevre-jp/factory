import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import { TransactionType } from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

// 最適化(2022-06-01~)
export type IAgent = ActionFactory.IParticipantAsSeller;
// 最適化(2022-06-01~)
export type IRecipient = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson;

export enum ObjectType {
    PointAward = 'PointAward'
}

/**
 * オーソリ対象
 */
export interface IObject {
    typeOf: ObjectType;
    /**
     * 金額
     */
    amount: number;
    /**
     * 入金先カード番号
     */
    toAccountNumber: string;
    /**
     * 説明
     */
    notes?: string;
}

export interface IResult {
    price: number;
    amount: number;
}

export interface IPurpose {
    typeOf: TransactionType;
    id: string;
}

export type IError = any;

/**
 * ポイントインセンティブ承認アクション属性
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}

/**
 * ポイントインセンティブ承認アクション
 * 注文取引のインセンティブとしてポイントを付与する場合に使用されます。
 */
export type IAction = ActionFactory.IAction<IAttributes>;
