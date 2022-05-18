import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { ISeller } from '../../seller';
import { IAttributes as IInformActionAttributes } from '../interact/inform';
import { IPaymentService as IPaymentServiceOnPay, IPayPurpose } from './pay';

/**
 * agentはSeller
 */
export interface IAgentAsSeller extends Omit<ISeller, 'branchCode' | 'paymentAccepted'> {
    name: string;
}
// tslint:disable-next-line:no-suspicious-comment
// TODO IAgentAsSellerに限定する
export type IAgent = IAgentAsSeller | ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IPaymentService = IPaymentServiceOnPay & {
    refundFee?: number;
};

export type IObject = IPaymentService[];

export type IResult = any;

export type IInformPayment = IInformActionAttributes<any, any>;

export interface IPotentialActions {
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
