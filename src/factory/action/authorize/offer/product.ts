import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import * as OrderFactory from '../../../order';
import PriceCurrency from '../../../priceCurrency';
import { IProduct } from '../../../product';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IService = IProduct;
export type IObject = OrderFactory.IAcceptedOffer<IService>[];
export type IResultAcceptedOffer = OrderFactory.IAcceptedOffer<OrderFactory.IServiceOutput>[];
export interface IResult {
    price: number;
    priceCurrency: PriceCurrency;
    acceptedOffers: IResultAcceptedOffer;
    requestBody?: any;
    responseBody: any;
}
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
export type IError = any;
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}

/**
 * プロダクトオファー承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
