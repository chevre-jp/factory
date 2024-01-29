import {
    IParticipantAsCustomer,
    IParticipantAsPerson,
    IParticipantAsProject,
    IParticipantAsWebApplication
} from '../../../action';
import * as OrderFactory from '../../../order';
import { IGood, IOwnershipInfo } from '../../../ownershipInfo';
import { IAttributes as IRegisterServiceAttributes } from '../../interact/confirm/registerService';
import * as SendActionFactory from '../send';
import { IAttributes as ISendEmailMessageActionAttributes } from './message/email';

export type IAgent = IParticipantAsPerson | IParticipantAsProject | IParticipantAsWebApplication;
export type IRecipient = IParticipantAsWebApplication | IParticipantAsPerson | IParticipantAsCustomer;
export type IObject = OrderFactory.ISimpleOrder & {
    /**
     * 配送対象オファー(2024-01-11~)
     */
    acceptedOffers?: {
        limit: number;
        page: number;
    };
};
/**
 * 注文配送結果としての所有権
 */
export type IResult = IOwnershipInfo<IGood>[];
export interface IPotentialActions {
    // moneyTransfer?: IMoneyTransferActionAttributes[]; // 通貨転送アクション廃止(2024-01-29~)
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
