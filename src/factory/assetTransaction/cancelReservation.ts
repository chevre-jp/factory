import { IAttributes as ICancelReservationActionAttributes } from '../action/cancel/reservation';
import * as AssetTransactionFactory from '../assetTransaction';
import { ITransaction as IReserveTransaction } from '../assetTransaction/reserve';
import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import { IReservation as IEventReservation } from '../reservation/event';

// 最適化(2022-05-27~)
export import IAgent = AssetTransactionFactory.IAgent;
// export interface IAgent {
//     typeOf: string;
//     id?: string;
//     name: string;
//     url?: string;
// }
export type IStartParamsWithoutDetail =
    AssetTransactionFactory.IStartParams<AssetTransactionType.CancelReservation, IAgent, undefined, IObjectWithoutDetail>;
/**
 * 取引開始パラメータ
 */
export type IStartParams = AssetTransactionFactory.IStartParams<AssetTransactionType.CancelReservation, IAgent, undefined, IObject>;
// tslint:disable-next-line:no-empty-interface
export interface IResult {
}
/**
 * エラー
 */
export type IError = any;
export interface IObjectWithoutDetail {
    clientUser?: IClientUser;
    reservation?: {
        /**
         * 予約IDをキーに取消
         */
        id?: string | string[];
        /**
         * 予約番号をキーに取消
         */
        reservationNumber?: string;
    };
}
/**
 * 取引対象物
 */
export interface IObject {
    clientUser?: IClientUser;
    transaction?: IReserveTransaction;
    reservations?: IEventReservation[];
}
// export interface IPotentialActionsParams {
//     cancelReservation?: {
//         potentialActions?: {
//         };
//     };
// }
/**
 * 取引確定パラメータ
 */
export interface IConfirmParams {
    id: string;
    /**
     * 取引確定後アクション
     * 不要なので廃止(2022-05-23~)
     */
    // potentialActions?: IPotentialActionsParams;
}
export interface IPotentialActions {
    cancelReservation: ICancelReservationActionAttributes[];
}
export type ITransaction = IExtendId<IAttributes>;
/**
 * 取引属性
 */
export interface IAttributes
    extends AssetTransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}
export interface ISearchConditions extends AssetTransactionFactory.ISearchConditions<AssetTransactionType.CancelReservation> {
}
