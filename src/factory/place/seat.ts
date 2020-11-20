import ItemAvailability from '../itemAvailability';
import * as OfferFactory from '../offer';
import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { IPriceSpecification as ICategoryCodeChargeSpecification } from '../priceSpecification/categoryCodeChargeSpecification';
import { IPriceSpecification as ICompoundPriceSpecification } from '../priceSpecification/compoundPriceSpecification';

/**
 * 座席に対する価格構成要素インターフェース
 */
export type IPriceComponent = ICategoryCodeChargeSpecification;

/**
 * 座席に対する価格仕様
 */
export type IPriceSpecification = ICompoundPriceSpecification<IPriceComponent>;

/**
 * 座席オファーインターフェース
 */
export interface IOffer extends OfferFactory.IOffer {
    availability: ItemAvailability;
    priceSpecification?: IPriceSpecification;
}

/**
 * 座席タイプインターフェース
 */
export type ISeatingType = string | string[];

/**
 * 座席インターフェース
 */
export interface IPlace extends PlaceFactory.IPlace {
    typeOf: PlaceType.Seat;
    /**
     * 枝番号
     */
    branchCode: string;
    /**
     * 座席タイプ
     */
    seatingType?: ISeatingType;
}

export interface IPlaceWithOffer extends IPlace {
    offers?: IOffer[];
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
            containedInPlace: {
                branchCode?: { $eq?: string };
            };
        };
    };
    name?: {
        $regex?: string;
    };
    seatingType?: { $eq?: string };
}
