import { IProgramMembership } from '../../../programMembership';
import * as RegisterActionFactory from '../register';

export type IObject = IProgramMembership;
export type IResult = any;

export type IPotentialActions = any;

export interface IAttributes extends RegisterActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}

/**
 * メンバーシップ登録アクションインターフェース
 */
export type IAction = RegisterActionFactory.IAction<IAttributes>;
