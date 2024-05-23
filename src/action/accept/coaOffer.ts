import type * as COA from '@motionpicture/coa-service';

import * as ActionFactory from '../../action';
import { IAcceptedOfferBeforeAuthorize4COA, IAction as IAuthorizeAction, IObjectWithoutDetail } from '../../action/authorize/offer/eventService';
import { ActionType } from '../../actionType';
import { Identifier } from '../../service/webAPI';
import { TransactionType } from '../../transactionType';
import * as AcceptActionFactory from '../accept';

export interface IAppliesToSurfrock {
    identifier: string;
    serviceOutput: { typeOf: string };
}
export type IAgent = ActionFactory.IParticipantAsPerson | ActionFactory.IParticipantAsWebApplication;
export interface IObject {
    /**
     * 承認アクションID
     * 仮予約済の場合に指定
     */
    id?: string;
    object: IObjectWithoutDetail<Identifier.COA>;
    // agent: { typeOf: factory.personType.Person | factory.creativeWorkType.WebApplication };
    // purpose: { id: string };
    appliesToSurfrock: IAppliesToSurfrock;
    flgMember: COA.factory.reserve.FlgMember;
    typeOf: IAuthorizeAction<Identifier.COA>['typeOf'];
}
export interface IResult {
    object: {
        acceptedOffer: IAcceptedOfferBeforeAuthorize4COA[];
        event: { id: string };
    };
    // purpose: { id: string };
    // purposeRaw: params.purpose.id,
    result: {
        /**
         * 仮予約実行時は存在する
         */
        requestBody?: COA.factory.reserve.IUpdTmpReserveSeatArgs;
        /**
         * 仮予約実行時は存在する
         */
        responseBody?: COA.factory.reserve.IUpdTmpReserveSeatResult;
    };
    typeOf: IAuthorizeAction<Identifier.COA>['typeOf'];
}
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
/**
 * COA興行オファー採用アクション属性
 */
export interface IAttributes extends AcceptActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AcceptAction;
    object: IObject;
    agent: IAgent;
    purpose: IPurpose;
}
/**
 * COA興行オファー採用アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
