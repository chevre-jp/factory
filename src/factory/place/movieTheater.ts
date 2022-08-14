import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { IQuantitativeValue } from '../quantitativeValue';
import { ISeller } from '../seller';
import { UnitCode } from '../unitCode';
import { IPlace as IScreeningRoom } from './screeningRoom';

/**
 * 施設に対するオファーインターフェース
 */
export interface IOffer extends Pick<OfferFactory.IOffer, 'priceCurrency' | 'project' | 'typeOf' | 'eligibleQuantity'> {
    /**
     * イベント開始前の販売猶予期間
     */
    availabilityStartsGraceTime?: IQuantitativeValue<UnitCode.Day>;
    /**
     * イベント開始後の販売猶予期間
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
export interface IPlaceWithoutScreeningRoom extends PlaceFactory.IPlace {
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
    parentOrganization?: IParentOrganization;
}

/**
 * 施設インターフェース
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
}
