import * as COA from '@motionpicture/coa-service';

import * as ActionFactory from '../../../action';
import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import { Identifier as WebAPIIdentifier, IService } from '../../../service/webAPI';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipantAsProject;
export type IRecipient = ActionFactory.IParticipantAsSeller;
export type IObject4COA = COA.factory.reserve.IStateReserveArgs & {
    typeOf: 'COAReserveTransaction';
};
export interface IObject4Chevre {
    typeOf: AssetTransactionType.Reserve;
    transactionNumber: string;
}
export type IObject<T extends WebAPIIdentifier> =
    T extends WebAPIIdentifier.COA ? IObject4COA :
    IObject4Chevre;
export type IPurpose = ISimpleOrder;
export type IResult = any;
export type IInstrument<T extends WebAPIIdentifier> = IService<T>;
export interface IAttributes<T extends WebAPIIdentifier> extends ReturnActionFactory.IAttributes<IObject<T>, IResult> {
    agent: IAgent;
    instrument: IInstrument<T>;
    purpose: IPurpose;
    recipient: IRecipient;
}
/**
 * 予約取引返却アクション
 */
export type IAction<T extends WebAPIIdentifier> = ReturnActionFactory.IAction<IAttributes<T>>;
