import { IMultilingualString } from '../multilingualString';
import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { ISeller } from '../seller';
import { IPlace as IScreeningRoomSection } from './screeningRoomSection';

export interface IContainedInPlace {
    id: string;
    typeOf: PlaceType.MovieTheater;
    branchCode: string;
    name: IMultilingualString;
}
export type IParentOrganization = Pick<ISeller, 'typeOf' | 'id'> & {
    id: string;
};
/**
 * ルーム
 */
export interface IPlace extends Pick<
    PlaceFactory.IPlace,
    'project' | 'typeOf' | 'amenityFeature' | 'branchCode' | 'name' | 'address' | 'containsPlace' | 'additionalProperty' | 'openSeatingAllowed' | 'maximumAttendeeCapacity'
> {
    typeOf: PlaceType.ScreeningRoom;
    containedInPlace?: IContainedInPlace;
    /**
     * セクションリスト
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
    /**
     * 座席数
     */
    seatCount?: number;
    /**
     * セクション数
     */
    sectionCount?: number;
    // 必須化(2023-07-14~)
    parentOrganization: IParentOrganization;
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
        $in?: string[];
        $regex?: string;
    };
    containedInPlace?: {
        id?: { $eq?: string };
        branchCode?: { $eq?: string };
    };
    name?: {
        $regex?: string;
    };
    openSeatingAllowed?: boolean;
    $projection?: {
        seatCount?: 1;
        sectionCount?: 1;
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
