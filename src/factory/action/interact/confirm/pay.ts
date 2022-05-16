// import * as ActionFactory from '../../../action';
// import { ActionType } from '../../../actionType';
import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
// import * as MovieTicketFactory from '../../../paymentMethod/paymentCard/movieTicket';
import { IInstrument } from '../../authorize/paymentMethod/any';
import * as ConfirmActionFactory from '../confirm';

// export import IMovieTicket = MovieTicketFactory.IMovieTicket;
// export type IAgent = ActionFactory.IParticipant;
// export type IRecipient = ActionFactory.IParticipant;
export type IPurpose = ISimpleOrder;
// export enum ObjectType {
//     PaymentMethod = 'PaymentMethod'
// }
export interface IPayAssetTransaction {
    // chevre移行へ向けて変更(2022-05-16~)
    // typeOf: ObjectType;
    typeOf: AssetTransactionType.Pay;
    /**
     * 決済方法
     * 廃止(2022-05-17~)
     */
    // paymentMethod: {
    //     paymentMethodId: string;
    // };
    transactionNumber: string;
    // movieTickets?: IMovieTicket[];
}
export type IObject = IPayAssetTransaction[];
export type IResult = any;
export interface IAttributes extends ConfirmActionFactory.IAttributes<IObject, IResult> {
    instrument: IInstrument;
    // potentialActions?: any;
    purpose: IPurpose;
}
/**
 * 決済取引確定アクション
 */
export type IAction = ConfirmActionFactory.IAction<IAttributes>;
