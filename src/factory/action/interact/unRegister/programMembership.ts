import { IProgramMembership } from '../../../programMembership';
import * as UnRegisterActionFactory from '../unRegister';

export type IObject = IProgramMembership;

export type IResult = any;
export type IPotentialActions = any;

export interface IAttributes extends UnRegisterActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}

/**
 * メンバーシップ登録解除アクションインターフェース
 */
export type IAction = UnRegisterActionFactory.IAction<IAttributes>;
