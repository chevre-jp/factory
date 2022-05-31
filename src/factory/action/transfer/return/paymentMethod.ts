import * as ActionFactory from '../../../action';
import * as OrderFactory from '../../../order';
import { IAttributes as ISendEmailMessageActionAttributes } from '../../transfer/send/message/email';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipantAsProject;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = OrderFactory.IPaymentMethod;
export type IResult = any;
export interface IPotentialActions {
    /**
     * 返金処理完了を通知するEメール送信アクション
     */
    sendEmailMessage?: ISendEmailMessageActionAttributes[];
}
export type IPurpose = OrderFactory.ISimpleOrder;
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
}
/**
 * 決済返却アクション
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
