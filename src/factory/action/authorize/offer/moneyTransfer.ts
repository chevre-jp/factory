import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import { IOffer } from '../../../offer';
import * as OrderFactory from '../../../order';
import { PriceCurrency } from '../../../priceCurrency';
import { ISeller } from '../../../seller';
import { TransactionType } from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';
import { IPendingTransaction as ConfirmMoneyTransferPendingTransaction } from '../../interact/confirm/moneyTransfer';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IRequestBody = any;
export type IResponseBody = ConfirmMoneyTransferPendingTransaction;
export import IPendingTransaction = OrderFactory.IMoneyTransferPendingTransaction;

export interface IResult {
    price: number;
    priceCurrency: PriceCurrency;
    requestBody?: IRequestBody;
    responseBody: IResponseBody;
}

export import IItemOffered = OrderFactory.IMoneyTransfer;
export interface IAcceptedOffer extends IOffer {
    itemOffered: IItemOffered;
    seller: ISeller;
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
