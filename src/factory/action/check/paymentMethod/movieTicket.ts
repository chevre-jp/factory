import * as mvtkapi from '@movieticket/reserve-api-nodejs-client';

import * as ActionFactory from '../../../action';
import { OrganizationType } from '../../../organizationType';
import { IMovieTicket } from '../../../paymentMethod/paymentCard/movieTicket';
import * as CheckActionFactory from '../../check';

export type IAgent = ActionFactory.IParticipant;
export type IPurchaseNumberAuthIn = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthIn;
export type IPurchaseNumberAuthResult = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthResult;
export type ObjectType = string;
export type IMovieTicketResult = IMovieTicket;
export interface IObject {
    typeOf: ObjectType;
    movieTickets: IMovieTicket[];
    /**
     * 販売者
     */
    seller: { typeOf: OrganizationType; id: string };
}
export interface IResult {
    purchaseNumberAuthIn: IPurchaseNumberAuthIn;
    purchaseNumberAuthResult: IPurchaseNumberAuthResult;
    /**
     * 認証結果としてのムビチケリスト
     */
    movieTickets: IMovieTicketResult[];
}
export type IError = any;
/**
 * ムビチケ確認アクション属性インターフェース
 */
export interface IAttributes extends CheckActionFactory.IAttributes<IObject, IResult> {
    object: IObject;
    agent: IAgent;
}
/**
 * ムビチケ確認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
