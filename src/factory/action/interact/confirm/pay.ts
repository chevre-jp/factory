import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import { IPaymentMethod, ISimpleOrder } from '../../../order';
import * as MovieTicketFactory from '../../../paymentMethod/paymentCard/movieTicket';
import { IInstrument } from '../../authorize/paymentMethod/any';

export import IMovieTicket = MovieTicketFactory.IMovieTicket;
export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IPurpose = ISimpleOrder;
export enum ObjectType {
    PaymentMethod = 'PaymentMethod'
}
export interface IPaymentService {
    typeOf: ObjectType;
    /**
     * 決済方法
     */
    paymentMethod: IPaymentMethod;
    /**
     * ムビチケリスト
     */
    movieTickets?: IMovieTicket[];
}
export type IObject = IPaymentService[];
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
// tslint:disable-next-line:no-empty-interface
export interface IResult {
}
export interface IAttributes extends ActionFactory.IAttributes<ActionType.ConfirmAction, IObject, IResult> {
    instrument?: IInstrument;
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}

/**
 * 決済確定アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
