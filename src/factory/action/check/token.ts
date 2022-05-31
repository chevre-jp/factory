import * as ActionFactory from '../../action';
import * as CheckActionFactory from '../check';

export type IAgent = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson;
export interface IObject {
    token: string;
}
export type IResult = any;
export type IError = any;
/**
 * トークン確認アクション属性
 */
export interface IAttributes extends CheckActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    object: IObject;
}
/**
 * トークン確認アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
