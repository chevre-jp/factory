import {
    IParticipantAsCustomer,
    IParticipantAsPerson,
    IParticipantAsProject,
    IParticipantAsWebApplication
} from '../../../action';
import * as OrderFactory from '../../../order';
import { IGood, IOwnershipInfo } from '../../../ownershipInfo';
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
export type ISendEmailMessage = Pick<ISendEmailMessageActionAttributes, 'object'>;
export interface IPotentialActions {
    // moneyTransfer?: IMoneyTransferActionAttributes[]; // 通貨転送アクション廃止(2024-01-29~)
    // registerService?: IRegisterServiceAttributes[]; // サービス登録アクション廃止(2024-01-30~)
    /**
     * Eメール送信アクション
     * 注文処理後のメッセージ送信として機能しているので注意
     */
    sendEmailMessage?: ISendEmailMessage[]; // optimize(2024-05-07~)
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
