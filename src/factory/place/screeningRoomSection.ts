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
