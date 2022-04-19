import * as COA from '@motionpicture/coa-service';

import * as ActionFactory from '../../../action';
import * as ReserveTransactionFactory from '../../../assetTransaction/reserve';
import { AssetTransactionType } from '../../../assetTransactionType';
import * as WebAPIFactory from '../../../service/webAPI';
import * as ConfirmActionFactory from '../confirm';

export type IAgent = ActionFactory.IParticipant;

export type IObject4COA = COA.factory.reserve.IUpdReserveArgs;

export type IObject4Chevre = ReserveTransactionFactory.IConfirmParams & {
    typeOf: AssetTransactionType.Reserve;
};

export type IObject<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? IObject4COA :
    IObject4Chevre;

// tslint:disable-next-line:no-empty-interface
export interface IResult {
}

// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}

export type IInstrument<T extends WebAPIFactory.Identifier> = WebAPIFactory.IService<T>;

export interface IAttributes<T extends WebAPIFactory.Identifier> extends ConfirmActionFactory.IAttributes<IObject<T>, IResult> {
    agent: IAgent;
    potentialActions?: IPotentialActions;
    instrument?: IInstrument<T>;
}

/**
 * 予約確定アクションインターフェース
 */
export type IAction<T extends WebAPIFactory.Identifier> = ConfirmActionFactory.IAction<IAttributes<T>>;
