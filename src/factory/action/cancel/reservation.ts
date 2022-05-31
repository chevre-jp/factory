import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { AssetTransactionType } from '../../assetTransactionType';
import { IReservation as IEventReservation } from '../../reservation/event';
// import { IAttributes as IInformActionAttributes } from '../interact/inform';

export type IAgent = ActionFactory.IParticipantAsProject;
/**
 * 予約キャンセル対象
 */
export type IObject = IEventReservation;
/**
 * 予約キャンセル結果
 */
export type IResult = any;
/**
 * 予約キャンセル目的
 */
export interface IPurpose {
    /**
     * 取引タイプ
     */
    typeOf: AssetTransactionType;
    /**
     * 取引ID
     */
    id: string;
}
// export type IInformReservation = IInformActionAttributes<IObject, any>;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
/**
 * アクション属性
 */
export interface IAttributes extends ActionFactory.IAttributes<ActionType.CancelAction, IObject, IResult> {
    agent: IAgent;
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}
/**
 * 予約キャンセルアクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
