import * as ActionFactory from '../../../action';
import * as OrderFactory from '../../../order';
// import * as WebAPIFactory from '../../../service/webAPI';
import { IAttributes as IReturnPaymentMethodActionAttributes } from '../../transfer/return/paymentMethod';
// import { IAttributes as IReturnReserveTransactionActionAttributes } from '../../transfer/return/reserveTransaction';
import * as ReturnActionFactory from '../return';
import { IAttributes as ISendEmailMessageActionAttributes } from '../send/message/email';
import * as ReturnMoneyTransferActionFactory from './moneyTransfer';
import * as ReturnPointAwardActionFactory from './pointAward';

// 注文のreturnerに反映されるので調整
export type IAgent = ActionFactory.IParticipantAsPerson | ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsProject;
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
export interface IPotentialActions {
    /**
     * 決済返却アクション
     * refundから移行(2022-08-10~)
     */
    returnPaymentMethod: IReturnPaymentMethodActionAttributes[];
    /**
     * 入金返却アクション
     */
    returnMoneyTransfer: ReturnMoneyTransferActionFactory.IAttributes[];
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
}
/**
 * 返品アクション
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;