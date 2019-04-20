import IMultilingualString from '../multilingualString';
import * as OfferFactory from '../offer';
import * as PlaceFactory from '../place';
import { ISeatingType } from '../qualitativeValue/seatingType';
import { IQuantitativeValue } from '../quantitativeValue';
import SortType from '../sortType';
import { UnitCode } from '../unitCode';

/**
 * 座席タイプ
 */
// export enum SeatingType {
//     WheelChair = 'WheelChair'
// }

export type ISeatingType = ISeatingType;

/**
 * 座席インターフェース
 */
export interface ISeat extends PlaceFactory.IPlace {
    /**
     * 枝番号
     * 座席コードに相当
     */
    branchCode: string;
    /**
     * 座席タイプ
     */
    seatingType?: ISeatingType;
}

/**
 * 上映セクションインターフェース
 */
export interface IScreeningRoomSection extends PlaceFactory.IPlace {
    /**
     * 座席リスト
     */
    containsPlace: ISeat[];
    /**
     * 枝番号(セクションコードに相当)
     */
    branchCode: string;
}

/**
 * 上映室インターフェース
 */
export interface IScreeningRoom extends PlaceFactory.IPlace {
    /**
     * 上映セクションリスト
     */
    containsPlace: IScreeningRoomSection[];
    /**
     * 枝番号
     */
    branchCode: string;
    /**
     * 上映室名称
     */
    name: IMultilingualString;
}

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
 * place interface without screening room
 */
export interface IPlaceWithoutScreeningRoom extends PlaceFactory.IPlace {
    id: string;
    /**
     * スクリーン数
     */
    screenCount: number;
    /**
     * 枝番号
     */
    branchCode: string; // 劇場コード
    /**
     * 劇場名称
     */
    name: IMultilingualString;
    /**
     * 劇場名称(カナ)
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
 * 劇場施設インターフェース
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
export interface ISortOrder {
    branchCode?: SortType;
}

export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { ids?: string[] };
    /**
     * 名称
     */
    name?: string;
}
