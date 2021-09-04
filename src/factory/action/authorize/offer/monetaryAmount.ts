import * as ActionFactory from '../../../action';
// import { IAction as IMoneyTransferAction } from '../../../action/transfer/moneyTransfer';
import ActionType from '../../../actionType';
import { IMonetaryAmount } from '../../../monetaryAmount';
import { IOffer } from '../../../offer';
// import * as OrderFactory from '../../../order';
import PriceCurrency from '../../../priceCurrency';
import { ISeller } from '../../../seller';
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

export interface IItemOffered {
    typeOf: ActionType.MoneyTransfer;
    /**
     * 金額
     */
    amount: IMonetaryAmount;
    description?: string;
    /**
     * 転送先
     */
    toLocation: IPaymentCard;
    object?: {
        pendingTransaction?: IPendingTransaction;
    };
}

// export type IObject = OrderFactory.IAcceptedOffer<IMonetaryAmount> & {
//     toLocation: IPaymentCard;
//     pendingTransaction?: IPendingTransaction;
// };
export interface IAcceptedOffer extends IOffer {
    itemOffered: IItemOffered;
    seller: ISeller;
    // pendingTransaction?: IPendingTransaction;
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
