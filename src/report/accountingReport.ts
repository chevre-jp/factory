import { IAction as IPayAction, IPaymentService as IPayObject } from '../action/trade/pay';
import { IAction as IRefundAction, IPaymentService as IRefundObject } from '../action/trade/refund';
import { ICustomer, IOrder } from '../order';

export type IPayActionObject = Pick<IPayObject, 'id' | 'paymentMethod' | 'typeOf'>;
// 最適化(2023-06-30~)
export type IOptimizedPayAction = Pick<
    IPayAction,
    'actionStatus' | 'endDate' | 'id' | 'purpose' | 'startDate' | 'typeOf'
> & {
    object: IPayActionObject[];
};
export type IRefundActionObject = Pick<IRefundObject, 'id' | 'paymentMethod' | 'typeOf'>;
// 最適化(2023-06-30~)
export type IOptimizedRefundAction = Pick<
    IRefundAction,
    'actionStatus' | 'endDate' | 'id' | 'purpose' | 'startDate' | 'typeOf'
> & {
    object: IRefundActionObject[];
};
export type IAction = IOptimizedPayAction | IOptimizedRefundAction;
export type IOptimizedCustomer = Pick<ICustomer, 'additionalProperty' | 'id' | 'identifier' | 'typeOf'>;
// 最適化(2023-06-30~)
export type IOrderAsMainEntity = Pick<
    IOrder,
    'acceptedOffers' | 'broker' | 'confirmationNumber'
    | 'id' | 'orderDate' | 'orderNumber' | 'orderedItem'
    | 'paymentMethods' | 'price' | 'priceCurrency' | 'seller' | 'typeOf'
> & {
    numItems: number;
    customer: IOptimizedCustomer;
};
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
