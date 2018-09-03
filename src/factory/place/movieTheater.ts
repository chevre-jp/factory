import IMultilingualString from '../multilingualString';
import * as PlaceFactory from '../place';
import SortType from '../sortType';

/**
 * 場所としての座席インターフェース
 */
export interface ISeat extends PlaceFactory.IPlace {
    /**
     * 枝番号
     * 座席コードに相当
     */
    branchCode: string;
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
     * 枝番号
     * セクションコードに相当
     */
    branchCode: string;
}
/**
 * 場所としての上映室インターフェース
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
     * 劇場住所
     */
    address?: IMultilingualString;
    /**
     * 電話番号
     */
    telephone: string;
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
    /**
     * 名称
     */
    name?: string;
}
