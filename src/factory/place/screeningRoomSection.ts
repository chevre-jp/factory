import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { IPlace as ISeat, IPlaceWithOffer as ISeatWithOffer } from './seat';

/**
 * 上映セクションインターフェース
 */
export interface IPlace extends PlaceFactory.IPlace {
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

export interface IPlaceWithOffer extends IPlace {
    containsPlace: ISeatWithOffer[];
}

export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: any;
    project?: { id?: { $eq?: string } };
    branchCode?: {
        $eq?: string;
        $regex?: string;
    };
    containedInPlace?: {
        branchCode?: { $eq?: string };
        containedInPlace: {
            branchCode?: { $eq?: string };
        };
    };
    name?: {
        $regex?: string;
    };
}
