import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import * as MoneyTransferTransactionFactory from '../../../assetTransaction/moneyTransfer';
import { IOffer } from '../../../offer';
import * as OrderFactory from '../../../order';
import { PriceCurrency } from '../../../priceCurrency';
import { TransactionType } from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson | ActionFactory.IParticipantAsSeller;
export type IRecipient = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson;
export type IRequestBody = MoneyTransferTransactionFactory.IStartParamsWithoutDetail;
export type IResponseBody = MoneyTransferTransactionFactory.ITransaction;
export import IPendingTransaction = OrderFactory.IMoneyTransferPendingTransaction;
export type IResultAcceptedOffer = OrderFactory.IAcceptedOffer<OrderFactory.IMoneyTransfer>;
export interface IResult {
    price: number;
    priceCurrency: PriceCurrency;
    requestBody?: IRequestBody;
    responseBody: IResponseBody;
    acceptedOffers: IResultAcceptedOffer[];
}
export import IItemOffered = OrderFactory.IMoneyTransfer;
export interface IAcceptedOffer extends Omit<IOffer, 'addOn' | 'availability' | 'availableAtOrFrom'> {
    itemOffered: IItemOffered;
    seller: ActionFactory.IParticipantAsSeller;
}
export type IObject = IAcceptedOffer;
export interface ITransactionPurpose {
    typeOf: TransactionType;
    id: string;
}
export type IPurpose = ITransactionPurpose;
export type IError = any;
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}
export type IAction = ActionFactory.IAction<IAttributes>;
