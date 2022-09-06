import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { AssetTransactionType } from '../../assetTransactionType';
import { EventType } from '../../eventType';
import { ProductType } from '../../product';
import { ReservationStatusType } from '../../reservationStatusType';
import { ReservationType } from '../../reservationType';

export type IAgent = ActionFactory.IParticipantAsProject;
/**
 * 予約取消対象
 */
export interface IObject {
    typeOf: ReservationType.EventReservation;
    id: string;
    issuedThrough?: {
        typeOf?: ProductType.EventService;
    };
    reservationFor: {
        typeOf: EventType.ScreeningEvent;
        id: string;
    };
    reservationNumber: string;
    /**
     * previousReservationStatusを変更時に指定するために必要
     */
    reservationStatus: ReservationStatusType;
}
/**
 * 予約取消結果
 */
export type IResult = any;
/**
 * 予約取消目的
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
/**
 * アクション属性
 */
export interface IAttributes extends ActionFactory.IAttributes<ActionType.CancelAction, IObject, IResult> {
    agent: IAgent;
    // potentialActions?: IPotentialActions;
    purpose: IPurpose;
}
/**
 * 予約取消アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
