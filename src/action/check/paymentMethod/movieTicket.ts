import { factory as surfrockFactory } from '@surfrock/sdk';

import * as ActionFactory from '../../../action';
import { OrganizationType } from '../../../organizationType';
import { IMovieTicketPaymentCard, IMovieTicketServiceOutput } from '../../../paymentMethod/paymentCard/movieTicket';
import { TransactionType } from '../../../transactionType';
import * as CheckActionFactory from '../../check';
import * as PayActionFactory from '../../trade/pay';

export type IAgent = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson;
export type IPurchaseNumberAuthIn = surfrockFactory.service.auth.purchaseNumberAuth.IPurchaseNumberAuthIn;
export type IPurchaseNumberAuthResult = surfrockFactory.service.auth.purchaseNumberAuth.IPurchaseNumberAuthResult;
export type IMkknInfo = surfrockFactory.service.auth.purchaseNumberAuth.INvalidTicket;
export type IYkknInfo = surfrockFactory.service.auth.purchaseNumberAuth.IValidTicket;
/**
 * 認証対象の決済カード
 */
export type IMovieTicket =
    // 最適化(2024-03-15~)
    // Omit<IMovieTicketPaymentCard, 'project' | 'serviceOutput'>
    Pick<
        IMovieTicketPaymentCard,
        'accessCode' | 'category' | 'identifier'
    // | 'serviceType' // 廃止(2024-03-15~)
    // | 'typeOf' // 廃止(2024-03-15~)
    >
    & {
        // 最適化(2023-03-03~)
        serviceOutput: Pick<IMovieTicketServiceOutput, 'reservationFor'>;
    };
// 最適化(2023-03-03~)
export interface IPaymentService extends Pick<
    PayActionFactory.IPaymentService, 'id' | 'typeOf'
// | 'paymentMethod' // 最適化(2024-03-15~)
> {
    /**
     * 販売者
     */
    seller: { typeOf: OrganizationType.Corporation; id: string };
    movieTickets?: IMovieTicket[];
    paymentMethod: {
        /**
         * 決済方法区分
         */
        typeOf: string;
    };
}
export type IObject = IPaymentService[];
export interface IResult {
    purchaseNumberAuthIn: IPurchaseNumberAuthIn;
    purchaseNumberAuthResult: IPurchaseNumberAuthResult;
}
export type IError = any;
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
export interface IAttributes extends CheckActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    object: IObject;
    purpose?: IPurpose; // add purpose(2023-03-06~)
}
/**
 * 決済カード認証アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
