import { IParticipant } from '../action';
import ActionType from '../actionType';
import { IExtendId } from '../autoGenerated';
import * as OrderFactory from '../order';
import { IServiceOutput } from '../product';
import { IProject } from '../project';
import * as TaskFactory from '../task';
import TaskName from '../taskName';
import { IPotentialActionsParams as IOrderPotentialActionsParams } from '../transaction/placeOrder';

export type IAgent = IParticipant;
export type IAcceptedOffer = OrderFactory.IAcceptedOffer<IServiceOutput>;
export type IPotentialActions = IOrderPotentialActionsParams;

export interface IData {
    agent: IAgent;
    /**
     * 注文対象
     */
    object: IAcceptedOffer;
    /**
     * 注文取引確定後アクション
     */
    potentialActions?: IPotentialActions;
    project: IProject;
    typeOf: ActionType.OrderAction;
}

export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.OrderProgramMembership;
    data: IData;
}

/**
 * メンバーシップ注文タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
