import {
    IParticipantAsCustomer,
    IParticipantAsPerson,
    IParticipantAsProject,
    IParticipantAsWebApplication
} from '../../../../action';
import { ICreativeWork as IEmailMessage } from '../../../../creativeWork/message/email';
import { ISimpleOrder } from '../../../../order';
import * as SendActionFactory from '../../send';

export type IAgent = IParticipantAsProject;
export type IRecipient = IParticipantAsWebApplication | IParticipantAsPerson | IParticipantAsCustomer;
/**
 * オブジェクト
 * 「Eメール通知」を送信する
 */
export type IObject = IEmailMessage;
export type IResult = any;
export type IPurpose = ISimpleOrder;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends SendActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
    recipient: IRecipient;
}
/**
 * Eメール送信アクション
 */
export type IAction = SendActionFactory.IAction<IAttributes>;
