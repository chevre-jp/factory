import { IOwnershipInfo, IPermit } from '../../../ownershipInfo';
import * as UnRegisterActionFactory from '../unRegister';

export type IObject = IOwnershipInfo<IPermit>;

export type IResult = any;
export type IPotentialActions = any;

export interface IAttributes extends UnRegisterActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}

/**
 * メンバーシップ登録解除アクションインターフェース
 */
export type IAction = UnRegisterActionFactory.IAction<IAttributes>;
