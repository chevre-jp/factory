import * as surfrock from '@surfrock/sdk';

import * as ActionFactory from '../../../action';
import { OrganizationType } from '../../../organizationType';
import { IMovieTicket as IMovieTicketPaymentCard, IServiceOutput as IMovieTicketServiceOutput } from '../../../paymentMethod/paymentCard/movieTicket';
import * as CheckActionFactory from '../../check';
import * as PayActionFactory from '../../trade/pay';

export type IAgent = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson;
export type IPurchaseNumberAuthIn = surfrock.service.auth.factory.IPurchaseNumberAuthIn;
export type IPurchaseNumberAuthResult = surfrock.service.auth.factory.IPurchaseNumberAuthResult;
export type IMovieTicket = Omit<IMovieTicketPaymentCard, 'project' | 'serviceOutput'> & {
    // 最適化(2023-03-03~)
    serviceOutput: Pick<IMovieTicketServiceOutput, 'reservationFor'>;
};
// 最適化(2023-03-03~)
export interface IPaymentService extends Pick<PayActionFactory.IPaymentService, 'id' | 'typeOf' | 'paymentMethod'> {
    /**
     * 販売者
     */
    seller: { typeOf: OrganizationType.Corporation; id: string };
    movieTickets?: IMovieTicket[];
}
export type IObject = IPaymentService[];
export interface IResult {
    purchaseNumberAuthIn: IPurchaseNumberAuthIn;
    purchaseNumberAuthResult: IPurchaseNumberAuthResult;
    /**
     * 認証結果としてのムビチケリスト
     */
    movieTickets: IMovieTicket[];
}
export type IError = any;
/**
 * ムビチケ確認アクション属性
 */
export interface IAttributes extends CheckActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    object: IObject;
}
/**
 * ムビチケ確認アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
