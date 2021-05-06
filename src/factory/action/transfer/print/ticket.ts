import * as ActionFactory from '../../../action';
import * as PrintActionFactory from '../print';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export interface ISearchConditions {
    agentId: string;
    ticketToken: string;
}
export interface ITicket {
    ticketToken: string;
}
export interface IObject extends ITicket {
    typeOf: string;
}
export type IResult = any;

export interface IAttributes extends PrintActionFactory.IAttributes<IObject, IResult> {
}
/**
 * チケット印刷アクションインターフェース
 */
export type IAction = PrintActionFactory.IAction<IAttributes>;
