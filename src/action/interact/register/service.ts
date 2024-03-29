import { IParticipantAsProject } from '../../../action';
import { IPermit } from '../../../permit';
import { IAttributes as IMoneyTransferActionAttributes } from '../../transfer/moneyTransfer';
import * as RegisterActionFactory from '../register';

export type IAgent = IParticipantAsProject;
export type IObject = IPermit;
export type IResult = any;
export interface IPotentialActions {
    moneyTransfer: IMoneyTransferActionAttributes[];
}
export interface IAttributes extends RegisterActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    potentialActions?: IPotentialActions;
}
/**
 * サービス登録アクション
 */
export type IAction = RegisterActionFactory.IAction<IAttributes>;
