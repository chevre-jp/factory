import { IPerson } from '../../../person';
import { IAttributes as IUnRegisterProgramMembershipActionAttributes } from '../../interact/unRegister/programMembership';
import * as DeleteActionFactory from '../delete';

export type IObject = IPerson;
export type IResult = any;

export interface IPotentialActions {
    /**
     * メンバーシップ登録解除アクション
     */
    unRegisterProgramMembership?: IUnRegisterProgramMembershipActionAttributes[];
}

export interface IAttributes extends DeleteActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}

/**
 * 会員削除アクションインターフェース
 */
export type IAction = DeleteActionFactory.IAction<IAttributes>;
