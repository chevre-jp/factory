import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import { IMonetaryAmount } from '../../../monetaryAmount';
import * as OrderFactory from '../../../order';
import PriceCurrency from '../../../priceCurrency';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';
import { IPaymentCard, IPendingTransaction } from '../../interact/confirm/moneyTransfer';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IRequestBody = any;
export type IResponseBody = IPendingTransaction;

export interface IResult {
    price: number;
    priceCurrency: PriceCurrency;
    requestBody?: IRequestBody;
    responseBody: IResponseBody;
}

export type IObject = OrderFactory.IAcceptedOffer<IMonetaryAmount> & {
    toLocation: IPaymentCard;
    pendingTransaction?: IPendingTransaction;
};

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
