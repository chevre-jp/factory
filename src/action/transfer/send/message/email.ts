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
// メッセージリポジトリに対応(2024-04-29~)
export type IObjectAsEmailMessage = Pick<
    IEmailMessage,
    'about' | 'identifier' | 'name' | 'sender' | 'text' | 'toRecipient' | 'typeOf'
>;
export type IOptimizedObject = Pick<IEmailMessage, 'identifier' | 'typeOf'> & {
    identifier: string;
    text?: never;
};
export type IObject = IObjectAsEmailMessage | IOptimizedObject;
export interface IResult {
    statusCode?: number;
    statusMessage?: string;
}
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
