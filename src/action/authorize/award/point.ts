import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import { TransactionType } from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipantAsSeller;
export type IRecipient = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson;
export enum ObjectType {
    PointAward = 'PointAward'
}
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
    // price: number; // discontinue(2023-11-27~)
    amount: number;
}
export interface IPurpose {
    typeOf: TransactionType;
    id: string;
}
export type IError = any;
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
