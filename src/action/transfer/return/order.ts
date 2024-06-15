import * as ActionFactory from '../../../action';
import * as OrderFactory from '../../../order';
import { IAttributes as IReturnInvoiceActionAttributes } from '../../transfer/return/invoice';
import * as ReturnActionFactory from '../return';
import { IAttributes as ISendEmailMessageActionAttributes } from '../send/message/email';
import * as ReturnPointAwardActionFactory from './pointAward';

export type IAgent = OrderFactory.IParticipantAsReturner;
export type IRecipient = ActionFactory.IParticipantAsSeller;
/**
 * 返却対象は注文
 */
export type IObject = OrderFactory.ISimpleOrder & {
    /**
     * 返品日時
     */
    dateReturned: Date;
};
export type IResult = any;
export type IPotentialReturnInvoiceAction = Pick<
    IReturnInvoiceActionAttributes,
    'agent' | 'project' | 'object' | 'potentialActions' | 'purpose' | 'recipient' | 'typeOf'
>;
export interface IPotentialActions {
    /**
     * 決済返却アクション
     * refundから移行(2022-08-10~)
     */
    returnPaymentMethod: IPotentialReturnInvoiceAction[];
    // returnMoneyTransfer: ReturnMoneyTransferActionFactory.IAttributes[]; // 廃止(2024-02-04~)
    /**
     * ポイントインセンティブ返却アクション
     */
    returnPointAward: ReturnPointAwardActionFactory.IAttributes[];
    /**
     * Eメール送信アクション
     */
    sendEmailMessage?: ISendEmailMessageActionAttributes[];
}
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
    purpose?: never;
}
/**
 * 返品アクション
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
