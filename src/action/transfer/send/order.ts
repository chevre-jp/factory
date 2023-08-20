import {
    IParticipantAsCustomer,
    IParticipantAsPerson,
    IParticipantAsProject,
    IParticipantAsWebApplication
} from '../../../action';
import * as OrderFactory from '../../../order';
import * as OwnershipInfoFactory from '../../../ownershipInfo';
import { IAttributes as IMoneyTransferActionAttributes } from '../../interact/confirm/moneyTransfer';
import { IAttributes as IRegisterServiceAttributes } from '../../interact/confirm/registerService';
import * as SendActionFactory from '../send';
import { IAttributes as ISendEmailMessageActionAttributes } from './message/email';

export type IAgent = IParticipantAsPerson | IParticipantAsProject | IParticipantAsWebApplication;
export type IRecipient = IParticipantAsWebApplication | IParticipantAsPerson | IParticipantAsCustomer;
export type IObject = OrderFactory.ISimpleOrder;
/**
 * 注文配送結果としての所有権
 */
export type IResult = OwnershipInfoFactory.IOwnershipInfo<OwnershipInfoFactory.IGood>[];
export interface IPotentialActions {
    // confirmReservation?: IConfirmReservationActionAttributes<WebAPIFactory.Identifier>[]; // 廃止(2023-08-21~)
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
 * 注文配送アクション
 */
export type IAction = SendActionFactory.IAction<IAttributes>;
