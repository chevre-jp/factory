import * as ActionFactory from '../../../../action';
import { ICreativeWork as IEmailMessage } from '../../../../creativeWork/message/email';
import { ISimpleOrder } from '../../../../order';
import * as SendActionFactory from '../../send';

// プロジェクトに変更(2022-05-18~)
export type IAgent = ActionFactory.IParticipantAsProject;
export type IRecipient = ActionFactory.IParticipant;
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
}
/**
 * Eメール送信アクション
 */
export type IAction = SendActionFactory.IAction<IAttributes>;
