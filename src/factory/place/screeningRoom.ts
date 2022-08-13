import { IMultilingualString } from '../multilingualString';
import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { IPlace as IScreeningRoomSection } from './screeningRoomSection';

/**
 * ルームインターフェース
 */
export interface IPlace extends Pick<
    PlaceFactory.IPlace,
    'project' | 'typeOf' | 'branchCode' | 'name' | 'address' | 'containedInPlace' | 'containsPlace' | 'additionalProperty' | 'openSeatingAllowed' | 'maximumAttendeeCapacity'
> {
    typeOf: PlaceType.ScreeningRoom;
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
}
