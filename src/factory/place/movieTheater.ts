import IMultilingualString from '../multilingualString';
import * as OfferFactory from '../offer';
import * as PlaceFactory from '../place';
import PlaceType from '../placeType';
import { IQuantitativeValue } from '../quantitativeValue';
// import SortType from '../sortType';
import { UnitCode } from '../unitCode';
import { IPlace as ISeat, IPlaceWithOffer as ISeatWithOffer } from './seat';

/**
 * 劇場に対するオファーインターフェース
 */
export interface IOffer extends OfferFactory.IOffer {
    /**
     * 上映イベント開始前の販売猶予期間
     */
    availabilityStartsGraceTime?: IQuantitativeValue<UnitCode.Day>;
    /**
     * 上映イベント開始後の販売猶予期間
     */
    availabilityEndsGraceTime?: IQuantitativeValue<UnitCode.Sec>;
}

/**
 * 上映セクションインターフェース
 */
export interface IScreeningRoomSection extends PlaceFactory.IPlace {
    typeOf: PlaceType.ScreeningRoomSection;
    /**
     * 座席リスト
     */
    containsPlace: ISeat[];
    /**
     * 枝番号
     */
    branchCode: string;
}

export interface IScreeningRoomSectionOffer extends IScreeningRoomSection {
    containsPlace: ISeatWithOffer[];
}

/**
 * 上映室インターフェース
 */
export interface IScreeningRoom extends PlaceFactory.IPlace {
    typeOf: PlaceType.ScreeningRoom;
    /**
     * 上映セクションリスト
     */
    containsPlace: IScreeningRoomSection[];
    /**
     * 枝番号
     */
    branchCode: string;
    /**
     * 名称
     */
    name: IMultilingualString;
}

/**
 * place interface without screening room
 */
export interface IPlaceWithoutScreeningRoom extends PlaceFactory.IPlace {
    typeOf: PlaceType.MovieTheater;
    id: string;
    /**
     * スクリーン数
     */
    screenCount: number;
    /**
     * 枝番号
     */
    branchCode: string;
    /**
     * 名称
     */
    name: IMultilingualString;
    /**
     * 名称(カナ)
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
}

/**
 * 劇場インターフェース
 */
export type IPlace = IPlaceWithoutScreeningRoom & {
    /**
     * 上映室リスト
     */
    containsPlace: IScreeningRoom[];
};

/**
 * ソート条件インターフェース
 */
export type ISortOrder = any;

export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * プロジェクト
     */
    project?: { ids?: string[] };
    /**
     * 枝番号
     */
    branchCodes?: string[];
    /**
     * 名称
     */
    name?: string;
}
