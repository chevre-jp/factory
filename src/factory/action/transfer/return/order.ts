import * as ActionFactory from '../../../action';
import * as OrderFactory from '../../../order';
import * as WebAPIFactory from '../../../service/webAPI';
import { IAttributes as IRefundActionAttributes } from '../../transfer/return/paymentMethod';
import { IAttributes as IReturnReserveTransactionActionAttributes } from '../../transfer/return/reserveTransaction';
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
     * 設定追加(2022-06-08~)
     */
    useConfirmRefund: boolean;
    /**
     * 予約取引返却アクション
     */
    cancelReservation?: IReturnReserveTransactionActionAttributes<WebAPIFactory.Identifier>[];
    /**
     * 返金アクション
     */
    refund: IRefundActionAttributes[];
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
