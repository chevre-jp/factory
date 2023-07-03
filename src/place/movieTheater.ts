import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { IQuantitativeValue } from '../quantitativeValue';
import { ISeller } from '../seller';
import { SortType } from '../sortType';
import { UnitCode } from '../unitCode';
import { IPlace as IScreeningRoom } from './screeningRoom';

export interface IAvailabilityStartsGraceTime extends Pick<IQuantitativeValue<UnitCode.Day>, 'typeOf' | 'value' | 'unitCode'> {
    unitCode: UnitCode.Day;
    value: number;
}
export interface IAvailabilityEndsGraceTime extends Pick<IQuantitativeValue<UnitCode.Sec>, 'typeOf' | 'value' | 'unitCode'> {
    unitCode: UnitCode.Sec;
    value: number;
}
/**
 * 施設に対するオファー
 */
export interface IOffer extends Pick<OfferFactory.IOffer, 'priceCurrency' | 'project' | 'typeOf' | 'eligibleQuantity'> {
    /**
     * イベント開始前の販売猶予期間
     */
    availabilityStartsGraceTime: IAvailabilityStartsGraceTime;
    /**
     * イベント開始後の販売猶予期間
     */
    availabilityEndsGraceTime: IAvailabilityEndsGraceTime;
    /**
     * イベント開始前の販売猶予期間(POS)
     */
    availabilityStartsGraceTimeOnPOS: IAvailabilityStartsGraceTime;
    /**
     * イベント開始後の販売猶予期間(POS)
     */
    availabilityEndsGraceTimeOnPOS: IAvailabilityEndsGraceTime;
}
export type POSType = 'POS';
/**
 * POS
 * 管理者が識別しやすいようPOSの属性を指定します
 */
export interface IPOS {
    typeOf: POSType;
    /**
     * コード
     */
    id: string;
    /**
     * 名称
     */
    name: string;
}
/**
 * 入場ゲート
 */
export type IEntranceGate = Pick<PlaceFactory.IPlace, 'typeOf' | 'identifier' | 'name'> & {
    typeOf: PlaceType.Place;
    identifier: string;
};
/**
 * 親組織
 */
export type IParentOrganization = Pick<ISeller, 'typeOf' | 'id'> & {
    id: string;
};

/**
 * place interface without screening room
 */
export interface IPlaceWithoutScreeningRoom extends Omit<PlaceFactory.IPlace, 'containsPlace'> {
    typeOf: PlaceType.MovieTheater;
    id: string;
    /**
     * ルーム数
     */
    screenCount?: number;
    /**
     * 施設コード
     */
    branchCode: string;
    /**
     * 入場ゲート
     */
    hasEntranceGate?: IEntranceGate[];
    /**
     * Points-of-Sales operated by the organization or person.
     */
    hasPOS?: IPOS[];
    /**
     * 名称
     */
    name: IMultilingualString;
    /**
     * カナ名称
     */
    kanaName: string;
    /**
     * 電話番号
     */
    telephone: string;
    /**
     * 販売情報
     */
    offers?: IOffer;
    /**
     * The larger organization that this organization is a subOrganization of, if any.
     */
    parentOrganization: IParentOrganization;
}

/**
 * 施設
 */
export type IPlace = IPlaceWithoutScreeningRoom & {
    /**
     * ルームリスト
     */
    containsPlace: IScreeningRoom[];
};

/**
 * 施設ソート条件
 */
export interface ISortOrder {
    branchCode?: SortType;
}
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * プロジェクト
     */
    project?: {
        id?: { $eq?: string };
    };
    id?: {
        $eq?: string;
        $in?: string[];
    };
    branchCode?: {
        $eq?: string;
        $regex?: string;
    };
    /**
     * 枝番号
     */
    branchCodes?: string[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 親組織
     */
    parentOrganization?: {
        id?: { $eq?: string };
    };
    additionalProperty?: {
        $elemMatch?: {
            name?: {
                /**
                 * 一致する名称の追加特性がひとつでも存在する
                 */
                $eq?: string;
            };
        };
    };
}
