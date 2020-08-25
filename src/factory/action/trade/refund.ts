import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { PaymentMethodType } from '../../paymentMethodType';
// import { IAttributes as IInformActionAttributes } from '../interact/inform';
import { AvailablePaymentMethodType, ICommonPaymentMethod } from './pay';

export type IRecipient = ActionFactory.IParticipant;

export type IPaymentService<T extends AvailablePaymentMethodType> = ICommonPaymentMethod<T> & {
    refundFee?: number;
};

export type IObject<T extends AvailablePaymentMethodType> = IPaymentService<T>[];

export type IResult = any;

// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
    /**
     * 通知アクション
     */
    // inform?: IInformActionAttributes<any, any>[];
}

export type IPurpose = any;

export interface IAttributes<T extends AvailablePaymentMethodType>
    extends ActionFactory.IAttributes<ActionType.RefundAction, IObject<T>, IResult> {
    // instrument?: IInstrument;
    recipient?: IRecipient;
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
}

/**
 * 返金アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
