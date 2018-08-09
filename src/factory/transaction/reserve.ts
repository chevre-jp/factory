// import { AccountType } from '../account';
// import * as MoneyTransferActionFactory from '../action/transfer/moneyTransfer';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

/**
 * 取引開始パラメーターインターフェース
 */
export type IStartParams = TransactionFactory.IStartParams<TransactionType.Reserve, IAgent, IRecipient, IObject>;
export interface IRecipient {
    typeOf: string;
    id?: string;
    name: string;
    url?: string;
}
export interface IAgent {
    typeOf: string;
    id?: string;
    name: string;
    url?: string;
}
export type IResult = any;
/**
 * エラーインターフェース
 */
export type IError = any;
export interface ISeat {
    seatNumber: string;
    seatRow?: string;
    seatSection: string;
    seatingType?: string;
}
export interface IAcceptedOffer {
    id: string;
    ticketedSeat: ISeat;
}
/**
 * 取引対象物インターフェース
 */
export interface IObject {
    clientUser?: IClientUser;
    eventId: string;
    acceptedOffers: IAcceptedOffer[];
    notes: string;
}
export interface IPotentialActions {
    reserve: any;
}
export type ITransaction = IExtendId<IAttributes>;
/**
 * 取引属性インターフェース
 */
export interface IAttributes
    extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}
