import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import * as OrderFactory from '../../../order';
import * as MovieTicketFactory from '../../../paymentMethod/paymentCard/movieTicket';
import { IInstrument, IPendingTransaction } from '../../authorize/paymentMethod/any';
import * as PayActionFactory from '../../trade/pay';

export import IMovieTicket = MovieTicketFactory.IMovieTicket;

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IPurpose = OrderFactory.ISimpleOrder;

export enum ObjectType {
    PaymentMethod = 'PaymentMethod'
}

export interface IPaymentService {
    typeOf: ObjectType;
    /**
     * 決済方法
     */
    paymentMethod: OrderFactory.IPaymentMethod;
    pendingTransaction?: IPendingTransaction;
    /**
     * ムビチケリスト
     */
    movieTickets?: IMovieTicket[];
}

export type IObject = IPaymentService[];

/**
 * 決済結果
 */
export interface IResult {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: PayActionFactory.ICreditCardSales[];
    seatInfoSyncIn?: any;
    seatInfoSyncResult?: any;
}

export interface IAttributes extends ActionFactory.IAttributes<ActionType.ConfirmAction, IObject, IResult> {
    instrument?: IInstrument;
    purpose: IPurpose;
}

/**
 * 決済アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
