import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import * as MoneyTransferTransactionFactory from '../../../assetTransaction/moneyTransfer';
import { IOffer } from '../../../offer';
import * as OrderFactory from '../../../order';
import { PriceCurrency } from '../../../priceCurrency';
import { TransactionType } from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

// 最適化(2022-06-01~)
export type IAgent = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson | ActionFactory.IParticipantAsSeller;
// 最適化(2022-06-01~)
export type IRecipient = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson;
export type IRequestBody = any;
export type IResponseBody = MoneyTransferTransactionFactory.ITransaction;
export import IPendingTransaction = OrderFactory.IMoneyTransferPendingTransaction;
export interface IResult {
    price: number;
    priceCurrency: PriceCurrency;
    requestBody?: IRequestBody;
    responseBody: IResponseBody;
}
export import IItemOffered = OrderFactory.IMoneyTransfer;
export interface IAcceptedOffer extends Omit<IOffer, 'addOn' | 'availability' | 'availableAtOrFrom'> {
    itemOffered: IItemOffered;
    // seller: ISeller;
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
