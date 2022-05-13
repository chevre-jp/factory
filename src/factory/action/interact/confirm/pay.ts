import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import { IPaymentMethod, ISimpleOrder } from '../../../order';
// import * as MovieTicketFactory from '../../../paymentMethod/paymentCard/movieTicket';
import { IInstrument } from '../../authorize/paymentMethod/any';

// export import IMovieTicket = MovieTicketFactory.IMovieTicket;
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
    // movieTickets?: IMovieTicket[];
}
export type IObject = IPaymentService[];
export type IResult = any;
export interface IAttributes extends ActionFactory.IAttributes<ActionType.ConfirmAction, IObject, IResult> {
    instrument?: IInstrument;
    // potentialActions?: any;
    purpose: IPurpose;
}
/**
 * 決済確定アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
