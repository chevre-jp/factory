import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { ISimpleOrder } from '../../order';
import { TransactionType } from '../../transactionType';
import { IAttributes as ISendEmailMessageActionAttributes } from '../transfer/send/message/email';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = ISimpleOrder;
// tslint:disable-next-line:no-empty-interface
export interface IResult { }
export type IPotentialSendEmailMessageAction = Pick<ISendEmailMessageActionAttributes, 'object'>;
export interface IPotentialSendOrderAction {
    potentialActions?: {
        // 注文処理中のメッセージ送信として機能しているので注意
        sendEmailMessage?: IPotentialSendEmailMessageAction[]; // optimize(2024-05-07~)
    };
}
export interface IPotentialActions {
    // givePointAward?: IGivePointAwardActionAttributes[]; // 廃止(2024-03-12~)
    sendOrder?: IPotentialSendOrderAction; // optimize(2024-01-16~)
}
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
export interface IAttributes extends Pick<
    ActionFactory.IAttributes<ActionType.OrderAction, IObject, IResult>,
    'typeOf' | 'result' | 'purpose' | 'project' | 'potentialActions' | 'object' | 'error' | 'agent'
> {
    potentialActions?: IPotentialActions;
    purpose?: IPurpose;
}
/**
 * 注文アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
