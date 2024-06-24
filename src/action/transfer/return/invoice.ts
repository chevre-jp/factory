import * as ActionFactory from '../../../action';
import { AssetTransactionType } from '../../../assetTransactionType';
import { IInvoice } from '../../../invoice';
import { IReferencedInvoice, ISimpleOrder } from '../../../order';
import { IAttributes as ISendEmailMessageActionAttributes } from '../../transfer/send/message/email';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipantAsProject;
type IRecipientAttributes = 'id' | 'name' | 'typeOf';
export type IRecipient = Pick<ActionFactory.IParticipantAsCustomer, IRecipientAttributes>
    | Pick<ActionFactory.IParticipantAsPerson, IRecipientAttributes>
    | Pick<ActionFactory.IParticipantAsWebApplication, IRecipientAttributes>;
export type IObject = Pick<
    IReferencedInvoice,
    'accountId' | 'issuedThrough' | 'paymentMethod' | 'paymentMethodId' | 'totalPaymentDue' | 'name' | 'additionalProperty'
>
    & Pick<IInvoice, 'typeOf'>; // typeOfを定義(2024-03-06~)
// tslint:disable-next-line:no-empty-interface
export interface IResult { }
export type IPotentialSendEmailMessageAction = Pick<ISendEmailMessageActionAttributes, 'object'>; // optimize(2024-06-26~)
export interface IPotentialActions {
    /**
     * 返金処理完了を通知するEメール送信アクション
     */
    sendEmailMessage?: IPotentialSendEmailMessageAction[];
}
export type IPurpose = ISimpleOrder;
export interface IInstrument {
    typeOf: AssetTransactionType.Refund;
    transactionNumber: string;
}
export interface IAttributes extends Pick<
    ReturnActionFactory.IAttributes<IObject, IResult>,
    'agent' | 'error' | 'instrument' | 'object' | 'potentialActions' | 'purpose' | 'recipient' | 'result' | 'project' | 'sameAs' | 'typeOf'
> {
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
    instrument?: IInstrument; // define(2024-06-17~)
}
/**
 * 請求返却アクション
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
