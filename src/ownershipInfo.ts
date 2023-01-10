import { CreativeWorkType } from './creativeWorkType';
import { OrganizationType } from './organizationType';
import * as PermitFactory from './permit';
import { PersonType } from './personType';
import * as ProductFactory from './product';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IReservation as IBusReservation } from './reservation/busReservation';
import { IReservation as IEventReservation } from './reservation/event';
import { ReservationType } from './reservationType';
import * as WebAPIFactory from './service/webAPI';
import { SortType } from './sortType';

export type IBookingService = WebAPIFactory.IService<WebAPIFactory.Identifier>;
export interface IBusReservationAsGood {
    typeOf: ReservationType.BusReservation;
    /**
     * 予約ID
     */
    id?: string;
    issuedThrough?: {
        typeOf: ProductFactory.ProductType.Transportation;
    };
    /**
     * 予約番号
     */
    reservationNumber?: string;
    /**
     * ブッキングサービス(API)
     */
    bookingService?: IBookingService;
}
export interface IEventReservationAsGood {
    typeOf: ReservationType.EventReservation;
    /**
     * 予約ID
     */
    id?: string;
    issuedThrough?: {
        typeOf: ProductFactory.ProductType.EventService;
    };
    /**
     * 予約番号
     */
    reservationNumber?: string;
    /**
     * ブッキングサービス(API)
     */
    bookingService?: IBookingService;
}
/**
 * 予約
 */
export type IReservation = IBusReservationAsGood | IEventReservationAsGood;
export type IReservationWithDetail =
    (IEventReservationAsGood & IEventReservation) | (IBusReservationAsGood & IBusReservation);
export type IPermit = Pick<
    PermitFactory.IPermit,
    'identifier' | 'issuedThrough' | 'name' | 'project' | 'typeOf' | 'validFor'
>;
/**
 * 所有対象物 (Product or Service)
 */
export type IGood = IReservation | IPermit;
/**
 * 所有対象物(対象物詳細有)
 */
export type IGoodWithDetail = IReservationWithDetail | PermitFactory.IPermit;
/**
 * 所有者
 */
export interface IOwnerAsOrganization {
    // 個人情報排除するように
    typeOf: OrganizationType.Organization;
    id: string;
    // 不要なので廃止(2022-07-26~)
    // project: { id: string; typeOf: OrganizationType.Project };
    identifier?: IPropertyValue<string>[];
}
export interface IOwnerAsPerson {
    // 個人情報排除するように
    typeOf: PersonType;
    id: string;
    identifier?: IPropertyValue<string>[];
    // 不要なので廃止(2022-07-26~)
    // memberOf?: IMemberOf;
}
export interface IOwnerAsWebApplication {
    // 個人情報排除するように
    typeOf: CreativeWorkType.WebApplication;
    id: string;
    identifier?: IPropertyValue<string>[];
}
export type IOwner = IOwnerAsOrganization | IOwnerAsPerson | IOwnerAsWebApplication;
export interface IAcquiredFrom {
    // 最適化(2022-11-15~)
    // project: { id: string; typeOf: OrganizationType.Project };
    id: string;
    typeOf: OrganizationType.Corporation;
    name: string;
}
export type OwnershipInfoType = 'OwnershipInfo';
/**
 * 所有権
 */
export interface IOwnershipInfo<T extends IGood | IGoodWithDetail> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    /**
     * object type
     */
    typeOf: OwnershipInfoType;
    /**
     * 所有権ID
     */
    id: string;
    /**
     * 識別子
     */
    identifier?: string;
    /**
     * owned by whom
     * Array対応(2022-07-25~)
     */
    ownedBy: IOwner | IOwner[];
    /**
     * The organization or person from which the product was acquired.
     */
    acquiredFrom?: IAcquiredFrom;
    /**
     * The date and time of obtaining the product.
     */
    ownedFrom: Date;
    /**
     * The date and time of giving up ownership on the product.
     */
    ownedThrough?: Date;
    /**
     * 所有対象物
     */
    typeOfGood: T;
}
/**
 * ソート条件
 */
export interface ISortOrder {
    /**
     * 所有開始日時
     */
    ownedFrom?: SortType;
}
/**
 * 所有対象物検索条件
 */
export interface ITypeOfGoodSearchConditions {
    typeOf?: string | {
        $eq?: string;
        $in?: string[];
    };
    identifier?: {
        $eq?: string;
    };
    id?: {
        $eq?: string;
        $in?: string[];
    };
    issuedThrough?: {
        id?: {
            $eq?: string;
        };
        typeOf?: {
            $eq?: string;
        };
    };
}

/**
 * 所有権検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
    };
    acquiredFrom?: {
        id?: {
            $in?: string[];
        };
    };
    ids?: string[];
    identifiers?: string[];
    /**
     * 所有者
     */
    ownedBy?: {
        id?: string | {
            $in?: string[];
        };
        memberOf?: {
            membershipNumber?: {
                $in?: string[];
            };
        };
        typeOf?: { $eq?: string };
    };
    ownedFromGte?: Date;
    ownedFromLte?: Date;
    /**
     * 所有期間
     */
    ownedFrom?: Date;
    /**
     * 所有期間
     */
    ownedThrough?: Date;
    /**
     * 所有対象物
     */
    typeOfGood?: ITypeOfGoodSearchConditions;
}
