import { IAction as IPayAction, IPaymentService as IPayObject } from '../action/trade/pay';
import { IAction as IRefundAction, IPaymentService as IRefundObject } from '../action/trade/refund';
import { IOrder } from '../order';

// export type IExpludedActionAttributes =
//     'additionalProperty' | 'agent' | 'description' | 'error' | 'identifier' | 'instrument' | 'potentialActions' | 'recipient' | 'result';
// export type IOptimizedPayActionOld = Omit<IPayAction, IExpludedActionAttributes>;
export type IPayActionObject = Pick<IPayObject, 'id' | 'paymentMethod' | 'typeOf'>;
export type IOptimizedPayAction = Pick<
    IPayAction,
    'actionStatus' | 'endDate' | 'id' | 'project' | 'purpose' | 'startDate' | 'typeOf'
> & {
    object: IPayActionObject[];
};
// export type IOptimizedRefundActionOld = Omit<IRefundAction, IExpludedActionAttributes>;
export type IRefundActionObject = Pick<IRefundObject, 'id' | 'paymentMethod' | 'typeOf'>;
export type IOptimizedRefundAction = Pick<
    IRefundAction,
    'actionStatus' | 'endDate' | 'id' | 'project' | 'purpose' | 'startDate' | 'typeOf'
> & {
    object: IRefundActionObject[];
};
export type IAction = IOptimizedPayAction | IOptimizedRefundAction;
export type IOrderAsMainEntity = IOrder;
/**
 * 経理レポート
 */
export interface IReport {
    mainEntity: IAction;
    isPartOf: {
        mainEntity: IOrderAsMainEntity;
    };
}
/**
 * 検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    $unwindAcceptedOffers?: '1';
    project?: { id?: { $eq?: string } };
    order?: {
        acceptedOffers?: {
            itemOffered?: {
                reservationFor?: {
                    startDate?: { $gte?: Date; $lte?: Date };
                };
            };
        };
        orderDate?: { $gte?: Date; $lte?: Date };
        orderNumber?: { $eq?: string };
        paymentMethods?: {
            paymentMethodId?: { $eq?: string };
        };
        seller?: { id?: { $eq?: string } };
    };
}
