import * as ActionFactory from '../../../action';
import * as GivePointAwardActionFactory from '../give/pointAward';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 返却対象はポイントインセンティブ付与アクション
 */
export type IObject = GivePointAwardActionFactory.IAction;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}
/**
 * ポイントインセンティブ返却アクションインターフェース
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
