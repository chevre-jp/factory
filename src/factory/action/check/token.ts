import * as ActionFactory from '../../action';
import * as CheckActionFactory from '../check';

export type IAgent = ActionFactory.IParticipant;
export interface IObject {
    token: string;
}
export type IResult = any;
export type IError = any;
/**
 * トークン確認アクション属性インターフェース
 */
export interface IAttributes extends CheckActionFactory.IAttributes<IObject, IResult> {
    object: IObject;
    agent: IAgent;
}
/**
 * トークン確認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
