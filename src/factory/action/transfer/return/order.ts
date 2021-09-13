import * as ActionFactory from '../../../action';
import * as OrderFactory from '../../../order';
import { IAttributes as IInformActionAttributes } from '../../interact/inform';
import { IAttributes as IRefundActionAttributes } from '../../transfer/return/paymentMethod';
import { IAttributes as ICancelActionAttributes } from '../../transfer/return/reservation';
import * as ReturnActionFactory from '../return';
import { IAttributes as ISendEmailMessageActionAttributes } from '../send/message/email';
import * as ReturnMoneyTransferActionFactory from './moneyTransfer';
import * as ReturnPointAwardActionFactory from './pointAward';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 返却対象は注文
 */
export type IObject = OrderFactory.ISimpleOrder;

export type IResult = any;

export interface IPotentialActions {
    /**
     * 予約取消アクション
     */
    cancelReservation?: ICancelActionAttributes<any, any>[];
    /**
     * 注文通知アクション
     */
    informOrder?: IInformActionAttributes<any, any>[];
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
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}

/**
 * 注文返品アクションインターフェース
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
