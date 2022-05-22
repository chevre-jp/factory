import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import * as RegisterServiceTransactionFactory from '../../../assetTransaction/registerService';
import { AssetTransactionType } from '../../../assetTransactionType';
import { IOffer, ITicketPriceSpecification } from '../../../offer';
import * as OrderFactory from '../../../order';
import { PriceCurrency } from '../../../priceCurrency';
import { IProduct } from '../../../product';
import { ISeller } from '../../../seller';
import { TransactionType } from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipantAsSeller;
export type IRecipient = ActionFactory.IParticipant;
export type IService = IProduct;
export type IAcceptedOfferWithoutDetail = RegisterServiceTransactionFactory.IAcceptedOfferWithoutDetail;
export interface IAcceptedOffer extends Omit<IOffer, 'addOn' | 'price' | 'availability' | 'availableAtOrFrom'> {
    /**
     * オファー対象アイテム
     */
    itemOffered: IService;
    /**
     * 販売者
     */
    seller: ISeller;
    priceSpecification?: ITicketPriceSpecification;
}
export type IObjectWithoutDetail = IAcceptedOfferWithoutDetail[];
export type IObject = IAcceptedOffer[];
export type IResultAcceptedOffer = OrderFactory.IAcceptedOffer<OrderFactory.IPermit>[];
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
export interface IInstrument {
    typeOf: AssetTransactionType.RegisterService;
    transactionNumber: string;
}
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    instrument: IInstrument;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}
/**
 * プロダクトオファー承認アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
