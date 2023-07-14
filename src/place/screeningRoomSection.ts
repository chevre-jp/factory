import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { IPlace as ISeat, IPlaceWithOffer as ISeatWithOffer } from './seat';

/**
 * セクション
 */
export interface IPlace extends Pick<
    PlaceFactory.IPlace,
    'project' | 'typeOf' | 'branchCode' | 'name' | 'containedInPlace' | 'containsPlace' | 'additionalProperty'
> {
    typeOf: PlaceType.ScreeningRoomSection;
    /**
     * 座席リスト
     */
    containsPlace: ISeat[];
    /**
     * 枝番号
     */
    branchCode: string;
    /**
     * 座席数
     */
    seatCount?: number;
}

export interface IPlaceWithOffer extends IPlace {
    containsPlace: ISeatWithOffer[];
}

export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: any;
    project?: { id?: { $eq?: string } };
    parentOrganization?: {
        id?: { $eq?: string };
    };
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
    $projection?: {
        seatCount?: 1;
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
