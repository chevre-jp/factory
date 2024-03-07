import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { IAttributes as IInformActionAttributes } from '../interact/inform';
import { IPaymentMethod, IPaymentService as IPaymentServiceOnPay, IPurpose as IPayPurpose } from './pay';

export type IAgent = ActionFactory.IParticipantAsSeller | ActionFactory.IParticipantAsPerson;
export type IRecipient = ActionFactory.IParticipant;
export type IPaymentService = Omit<IPaymentServiceOnPay, 'paymentMethod'> & {
    refundFee?: number;
    paymentMethod: Pick<IPaymentMethod, 'accountId' | 'name' | 'paymentMethodId' | 'typeOf' | 'additionalProperty'>;
};

export type IObject = IPaymentService[];

export type IResult = any;

export type IInformPayment = IInformActionAttributes<{}, undefined>;

export interface IPotentialActions {
    add2report: boolean;
    informPayment?: IInformPayment[];
}
export type IPurpose = IPayPurpose;
export interface IAttributes extends ActionFactory.IAttributes<ActionType.RefundAction, IObject, IResult> {
    agent: IAgent;
    recipient?: IRecipient;
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
}

/**
 * 返金アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
