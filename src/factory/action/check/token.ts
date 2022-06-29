import * as ActionFactory from '../../action';
import * as CheckActionFactory from '../check';

export enum ObjectType {
    Ticket = 'Ticket'
}
export type IAgent = ActionFactory.IParticipantAsWebApplication
    | ActionFactory.IParticipantAsPerson
    | ActionFactory.IParticipantAsProject;
export interface IObject {
    token: string;
    typeOf: ObjectType;
}
export type IResult = any;
export type IError = any;
/**
 * トークン検証アクション属性
 */
export interface IAttributes extends CheckActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    object: IObject;
}
/**
 * トークン検証アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
