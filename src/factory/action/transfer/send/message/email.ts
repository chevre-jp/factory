import * as ActionFactory from '../../../../action';
import { ICreativeWork as IEmailMessage } from '../../../../creativeWork/message/email';
import * as SendActionFactory from '../../send';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * オブジェクトインターフェース
 * 「Eメール通知」を送信する
 */
export type IObject = IEmailMessage;

export type IResult = any;

export type IPurpose = any;

// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}

export interface IAttributes extends SendActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    /**
     * 何目的のEメール送信か
     * @example 注文配送通知メールであれば、Order型オブジェクト
     */
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
}
/**
 * Eメール送信アクションインターフェース
 */
export type IAction = SendActionFactory.IAction<IAttributes>;
