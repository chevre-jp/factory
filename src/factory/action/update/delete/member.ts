import { IPerson } from '../../../person';
// import { IAttributes as IUnRegisterProgramMembershipActionAttributes } from '../../interact/unRegister/programMembership';
import * as DeleteActionFactory from '../delete';

export type IObject = IPerson;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
    /**
     * メンバーシップ登録解除アクション
     * 廃止(2022-05-16~)
     */
    // unRegisterProgramMembership?: IUnRegisterProgramMembershipActionAttributes[];
}
export interface IAttributes extends DeleteActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}
/**
 * 会員削除アクション
 */
export type IAction = DeleteActionFactory.IAction<IAttributes>;
