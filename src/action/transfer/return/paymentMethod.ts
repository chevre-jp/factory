import * as ActionFactory from '../../../action';
import { IInvoice } from '../../../invoice';
import { IReferencedInvoice, ISimpleOrder } from '../../../order';
import { IAttributes as ISendEmailMessageActionAttributes } from '../../transfer/send/message/email';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipantAsProject;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = Pick<IReferencedInvoice, 'accountId' | 'issuedThrough' | 'paymentMethod' | 'paymentMethodId' | 'totalPaymentDue' | 'name' | 'additionalProperty'>
    & Pick<IInvoice, 'typeOf'>; // typeOfを定義(2024-03-06~)
export type IResult = any;
export interface IPotentialActions {
    /**
     * 返金処理完了を通知するEメール送信アクション
     */
    sendEmailMessage?: ISendEmailMessageActionAttributes[];
}
export type IPurpose = ISimpleOrder;
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
