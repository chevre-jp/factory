import IMultilingualString from '../multilingualString';
import { IProject } from '../project';

export interface ICustomer {
    // 購入者（名）
    givenName: string;
    // 購入者（姓）
    familyName: string;
    // 購入者メール
    email: string;
    // 購入者電話
    telephone: string;
    // 購入者区分
    group: string;
    // ユーザーネーム
    username: string;
    // 客層
    segment: string;
}

export interface IReservation {
    id: string;
    reservationFor: {
        id: string;
        startDate: Date;
    };
    reservedTicket?: {
        /**
         * 予約使用日時
         */
        dateUsed?: Date;
        ticketedSeat?: {
            seatNumber?: string;
        };
        ticketType?: {
            csvCode?: string;
            name?: IMultilingualString;
            priceSpecification?: {
                price?: number;
            };
        };
    };
}

/**
 * レポートにおける予約ステータス
 */
export enum ReportCategory {
    Reserved = 'RESERVED',
    Cancelled = 'CANCELLED',
    /**
     * 返品手数料
     */
    CancellationFee = 'CANCELLATION_FEE'
}

export interface IMainEntity {
    confirmationNumber: string;
    /**
     * 購入者
     */
    customer: ICustomer;
    /**
     * 注文日時
     */
    orderDate: Date;
    /**
     * 注文番号
     */
    orderNumber: string;
    /**
     * 決済方法名称
     */
    paymentMethod: string;
    /**
     * 金額
     */
    price: number;
    typeOf: string;
}

/**
 * 注文レポートインターフェース
 */
export interface IReport {
    amount: number;
    /**
     * レポートカテゴリー
     */
    category: ReportCategory;
    dateRecorded: Date;
    mainEntity: IMainEntity;
    payment_seat_index?: number;
    project: IProject;
    reservation: IReservation;
    sortBy: string;
}
