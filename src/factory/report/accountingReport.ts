import { IAction as IPayAction } from '../action/trade/pay';
import { IAction as IRefundAction } from '../action/trade/refund';
import { IOrder } from '../order';

export type IAction = IPayAction | IRefundAction;

/**
 * 経理レポートインターフェース
 */
export interface IReport {
    mainEntity: IAction;
    isPartOf: {
        mainEntity: IOrder;
    };
}

/**
 * 経理レポート検索条件
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
    };
}
