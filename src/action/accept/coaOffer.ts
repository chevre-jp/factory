import * as ActionFactory from '../../action';
import {
    IAcceptedOfferBeforeAuthorize4COA, IAction as IAuthorizeOfferAction,
    IObjectWithoutDetail, IPurpose, IResult as IAuthorizeOfferResult
} from '../../action/authorize/offer/eventService';
import { ActionType } from '../../actionType';
import { OfferType } from '../../offerType';
import { Identifier } from '../../service/webAPI';
import * as AcceptActionFactory from '../accept';

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
export type IAuthorizeCOAOfferResult = Pick<IAuthorizeOfferResult<Identifier.COA>, 'requestBody' | 'responseBody'>;
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
export interface IAttributes extends AcceptActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AcceptAction;
    object: IObject;
    agent: IAgent;
    purpose: IPurpose;
    potentialActions: IPotentialActions;
}
/**
 * COA興行オファー採用アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
