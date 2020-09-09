import * as mvtkapi from '@movieticket/reserve-api-nodejs-client';

import * as ActionFactory from '../../../action';
import { OrganizationType } from '../../../organizationType';
import { IMovieTicket } from '../../../paymentMethod/paymentCard/movieTicket';
import * as CheckActionFactory from '../../check';
import * as PayActionFactory from '../../trade/pay';

export type IAgent = ActionFactory.IParticipant;
export type IPurchaseNumberAuthIn = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthIn;
export type IPurchaseNumberAuthResult = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthResult;
export type IMovieTicketResult = IMovieTicket;

export interface IPaymentService extends PayActionFactory.IPaymentService {
    /**
     * 販売者
     */
    seller: { typeOf: OrganizationType; id: string };
}

export type IObject = IPaymentService[];

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
