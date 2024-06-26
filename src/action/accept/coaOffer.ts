import * as ActionFactory from '../../action';
import {
    IAcceptedOfferBeforeAuthorize4COA, IAction as IAuthorizeOfferAction,
    IObjectWithoutDetail, IPurpose
} from '../../action/authorize/offer/eventService';
import { ActionType } from '../../actionType';
import { AssetTransactionType } from '../../assetTransactionType';
import { OfferType } from '../../offerType';
import { IRecipe, IUpdTmpReserveSeatArgs, IUpdTmpReserveSeatResult } from '../../recipe/acceptCOAOffer';
import { Identifier } from '../../service/webAPI';
import * as AcceptActionFactory from '../accept';

export {
    IRecipe, IUpdTmpReserveSeatArgs, IUpdTmpReserveSeatResult
};
export interface IAppliesToSurfrock {
    identifier: string;
    serviceOutput: { typeOf: string };
}
export type IAgent = ActionFactory.IParticipantAsPerson | ActionFactory.IParticipantAsWebApplication;
/**
 * COA会員用フラグ
 */
export enum FlgMember {
    /**
     * 非会員
     */
    NonMember = '0',
    /**
     * 会員
     */
    Member = '1'
}
export interface IObject extends Pick<IObjectWithoutDetail<Identifier.COA>, 'acceptedOffer' | 'event'> {
    appliesToSurfrock: IAppliesToSurfrock;
    flgMember: FlgMember;
    typeOf: OfferType.AggregateOffer;
}
export interface IAuthorizeCOAOfferResult { responseBody: Pick<IUpdTmpReserveSeatResult, 'tmpReserveNum'>; }
export interface IResult {
    /**
     * 承認アクションID
     * 仮予約済の場合に指定
     */
    id?: string;
    object: {
        acceptedOffer: IAcceptedOfferBeforeAuthorize4COA[];
        event: { id: string };
    };
    /**
     * 仮予約実行時は存在する
     */
    result?: IAuthorizeCOAOfferResult;
    typeOf: IAuthorizeOfferAction<Identifier.COA>['typeOf'];
}
export { IPurpose };
export interface IPotentialActions {
    /**
     * 承認アクションID
     * 仮予約済の場合に指定
     */
    id?: string;
    typeOf: IAuthorizeOfferAction<Identifier.COA>['typeOf'];
}
export interface IInstrument {
    typeOf: AssetTransactionType.COAReserveTransaction;
    /**
     * 仮予約実行時は存在する
     */
    // requestBody?: IUpdTmpReserveSeatArgs; // discontinue
}
export interface IAttributes extends Pick<
    AcceptActionFactory.IAttributes<IObject, IResult>,
    'agent' | 'error' | 'instrument' | 'object' | 'potentialActions' | 'purpose' | 'result' | 'project' | 'sameAs' | 'typeOf'
> {
    agent: IAgent;
    instrument: IInstrument;
    object: IObject;
    purpose: IPurpose;
    potentialActions: IPotentialActions;
    typeOf: ActionType.AcceptAction;
}
/**
 * COA興行オファー採用アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
