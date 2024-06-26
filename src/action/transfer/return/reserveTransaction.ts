import * as ActionFactory from '../../../action';
import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import { IRecipe, IStateReserveArgs } from '../../../recipe/returnCOAReserve';
import { Identifier as WebAPIIdentifier, IService } from '../../../service/webAPI';
import * as ReturnActionFactory from '../return';

export {
    IRecipe as IReturnCOAReserveRecipe
};
export type IAgent = ActionFactory.IParticipantAsProject;
export type IRecipient = ActionFactory.IParticipantAsSeller;
export type IObject4COA = IStateReserveArgs & {
    typeOf: AssetTransactionType.COAReserveTransaction;
};
export interface IObject4Chevre {
    typeOf: AssetTransactionType.Reserve;
    transactionNumber: string;
}
export type IObject<T extends WebAPIIdentifier> =
    T extends WebAPIIdentifier.COA ? IObject4COA :
    IObject4Chevre;
export type IPurpose = ISimpleOrder;
// tslint:disable-next-line:no-empty-interface
export interface IResult { }
export type IInstrument<T extends WebAPIIdentifier> = Pick<IService<T>, 'identifier' | 'typeOf'>;
export interface IAttributes<T extends WebAPIIdentifier> extends Pick<
    ReturnActionFactory.IAttributes<IObject<T>, IResult>,
    'typeOf' | 'sameAs' | 'result' | 'recipient' | 'purpose' | 'project' | 'object' | 'instrument' | 'error' | 'agent'
> {
    agent: IAgent;
    instrument: IInstrument<T>;
    purpose: IPurpose;
    recipient: IRecipient;
}
/**
 * 予約取引返却アクション
 */
export type IAction<T extends WebAPIIdentifier> = ReturnActionFactory.IAction<IAttributes<T>>;
