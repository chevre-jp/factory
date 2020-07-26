import IMultilingualString from '../multilingualString';
import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { IPlace as IScreeningRoomSection } from './screeningRoomSection';

/**
 * 上映室インターフェース
 */
export interface IPlace extends PlaceFactory.IPlace {
    typeOf: PlaceType.ScreeningRoom;
    /**
     * 上映セクションリスト
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
}
