import * as ActionFactory from '../../../action';
import * as OrderFactory from '../../../order';
import * as OwnershipInfoFactory from '../../../ownershipInfo';
import * as WebAPIFactory from '../../../service/webAPI';
import { IAttributes as IMoneyTransferActionAttributes } from '../../interact/confirm/moneyTransfer';
import { IAttributes as IRegisterServiceAttributes } from '../../interact/confirm/registerService';
import { IAttributes as IConfirmReservationActionAttributes } from '../../interact/confirm/reservation';
import { IAttributes as IInformActionAttributes } from '../../interact/inform';
import * as SendActionFactory from '../send';
import { IAttributes as ISendEmailMessageActionAttributes } from './message/email';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = OrderFactory.IOrder;

/**
 * 注文配送結果としての所有権
 */
export type IResult = OwnershipInfoFactory.IOwnershipInfo<OwnershipInfoFactory.IGood>[];

export interface IPotentialActions {
    /**
     * 予約確定アクション
     */
    confirmReservation?: IConfirmReservationActionAttributes<WebAPIFactory.Identifier>[];
    /**
     * 注文通知アクション
     */
    informOrder?: IInformActionAttributes<any, any>[];
    /**
     * 通貨転送アクション
     */
    moneyTransfer?: IMoneyTransferActionAttributes[];
    /**
     * サービス登録アクション
     */
    registerService?: IRegisterServiceAttributes[];
    /**
     * Eメール送信アクション
     */
    sendEmailMessage?: ISendEmailMessageActionAttributes[];
}

export interface IAttributes extends SendActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}

/**
 * 注文配送アクションインターフェース
 */
export type IAction = SendActionFactory.IAction<IAttributes>;
