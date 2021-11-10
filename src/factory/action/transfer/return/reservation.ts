import * as COA from '@motionpicture/coa-service';

import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import * as CancelReservationAssetTransactionFactory from '../../../assetTransaction/cancelReservation';
import AssetTransactionType from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import { Identifier as WebAPIIdentifier } from '../../../service/webAPI';

export type IAgent = ActionFactory.IParticipant;
export type IObject4COA = COA.factory.reserve.IStateReserveArgs;
export interface IObject4Chevre {
    typeOf: AssetTransactionType.Reserve;
    id?: string;
    transactionNumber?: string;
}
export type IObject<T extends WebAPIIdentifier> =
    T extends WebAPIIdentifier.COA ? IObject4COA :
    IObject4Chevre;
// export type IPurpose = any;
export type IPurpose = ISimpleOrder;
export type IResult = any;
// export type IPotentialActions = any;
export type IPotentialActions = CancelReservationAssetTransactionFactory.IPotentialActionsParams;

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.ReturnAction, TObject, TResult> {
    potentialActions?: IPotentialActions;
    purpose?: IPurpose;
}

/**
 * キャンセルアクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject<WebAPIIdentifier>, IResult>> = ActionFactory.IAction<TAttributes>;
