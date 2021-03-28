import IMultilingualString from '../multilingualString';
import * as OfferFactory from '../offer';
import { IOrganization } from '../organization';
import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { IQuantitativeValue } from '../quantitativeValue';
// import SortType from '../sortType';
import { UnitCode } from '../unitCode';
import { IPlace as IScreeningRoom } from './screeningRoom';

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

export type POSType = 'POS';

/**
 * POSインターフェース
 * 管理者が識別しやすいようPOSの属性を指定します
 */
export interface IPOS {
    typeOf: POSType;
    id: string;
    name: string;
}

export type IEntranceGate = PlaceFactory.IPlace;

export type IParentOrganization = IOrganization;

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
    /**
     * The larger organization that this organization is a subOrganization of, if any.
     */
    parentOrganization?: IParentOrganization;
}

/**
 * 劇場インターフェース
 */
export type IPlace = IPlaceWithoutScreeningRoom & {
    /**
     * ルームリスト
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
    id?: {
        $eq?: string;
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
}
