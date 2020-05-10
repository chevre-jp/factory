import * as RegisterActionFactory from '../register';

export type IObject = any;
export type IResult = any;

export type IPotentialActions = any;

export interface IAttributes extends RegisterActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}

/**
 * サービス登録アクションインターフェース
 */
export type IAction = RegisterActionFactory.IAction<IAttributes>;
