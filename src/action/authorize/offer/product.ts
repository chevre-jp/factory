import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import * as RegisterServiceTransactionFactory from '../../../assetTransaction/registerService';
import { AssetTransactionType } from '../../../assetTransactionType';
import { IOffer } from '../../../offer';
import * as OrderFactory from '../../../order';
import { IIssuedThroughAsProduct, IPermit } from '../../../permit';
import { PriceCurrency } from '../../../priceCurrency';
import { IProduct, IServiceOutput as IProductServiceOutput, ITicketPriceSpecification } from '../../../product';
import { ISeller } from '../../../seller';
import { TransactionType } from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';
import { IPointAward } from '../../transfer/moneyTransfer';

export type IAgent = ActionFactory.IParticipantAsSeller;
// 最適化(2022-06-01~)
export type IRecipient = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson;
// IItemOfferedを最適化(2022-08-19~)
export type IPermitIssuedByProduct = Omit<IPermit, 'issuedThrough'> & {
    issuedThrough?: IIssuedThroughAsProduct; // プロダクトオファー承認として可能性があるのはプロダクトの発行するPermitのみ
};
export type IItemOffered = Pick<IProduct, 'typeOf' | 'id' | 'name'> & {
    serviceOutput: IProductServiceOutput & IPermitIssuedByProduct;
    pointAward?: IPointAward;
};
export type IAcceptedOfferWithoutDetail = RegisterServiceTransactionFactory.IAcceptedOfferWithoutDetail;
export type ISellerMakesOffer = Pick<ISeller, 'id' | 'name' | 'typeOf'>;
export interface IAcceptedOffer extends Pick<
    IOffer,
    'typeOf' | 'id' | 'identifier' | 'itemOffered' | 'name' | 'priceCurrency' | 'seller'
> {
    /**
     * オファーコード
     */
    identifier?: string;
    /**
     * オファー対象アイテム
     */
    itemOffered: IItemOffered;
    /**
     * 販売者
     */
    seller: ISellerMakesOffer;
    priceSpecification?: ITicketPriceSpecification;
}
export type IObjectWithoutDetail = IAcceptedOfferWithoutDetail[];
export type IObject = IAcceptedOffer[];
export type IResultAcceptedOffer = OrderFactory.IAcceptedOffer<OrderFactory.IPermit>[];
export interface IResult {
    price: number;
    priceCurrency: PriceCurrency;
    // acceptedOffers: IResultAcceptedOffer; // discontinue(2024-06-17~)
    requestBody: RegisterServiceTransactionFactory.IStartParamsWithoutDetail;
    responseBody: RegisterServiceTransactionFactory.ITransaction;
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
