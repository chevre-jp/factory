import { IMultilingualString } from '../multilingualString';
import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { SortType } from '../sortType';

export interface IPlace extends Pick<PlaceFactory.IPlace, 'project' | 'typeOf' | 'id' | 'name' | 'branchCode'> {
    typeOf: PlaceType.BusStop;
    id: string;
    branchCode: string;
    name: IMultilingualString;
}

/**
 * ソート条件
 */
export interface ISortOrder {
    branchCode?: SortType;
}
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { id?: { $eq?: string } };
    id?: {
        $eq?: string;
        $in?: string[];
    };
    branchCode?: {
        $eq?: string;
        $regex?: string;
        $in?: string[];
    };
    /**
     * 名称
     */
    name?: {
        $regex?: string;
    };
}
