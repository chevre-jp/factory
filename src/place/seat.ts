import { ItemAvailability } from '../itemAvailability';
import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { IPriceSpecification as ICategoryCodeChargeSpecification } from '../priceSpecification/categoryCodeChargeSpecification';
import { IPriceSpecification as ICompoundPriceSpecification } from '../priceSpecification/compoundPriceSpecification';

/**
 * 座席に対する価格構成要素
 */
export type IPriceComponent = ICategoryCodeChargeSpecification;

/**
 * 座席に対する価格仕様
 * 最適化(2022-11-15~)
 */
export type IPriceSpecification = Pick<ICompoundPriceSpecification<IPriceComponent>, 'typeOf' | 'priceComponent'>;

/**
 * 座席オファー
 * 最適化(2022-11-15~)
 */
export interface IOffer extends Pick<OfferFactory.IOffer, 'typeOf'> {
    availability: ItemAvailability;
    priceSpecification?: IPriceSpecification;
}

/**
 * 座席タイプ
 */
export type ISeatingType = string | string[];

/**
 * 座席
 */
export interface IPlace extends Pick<
    PlaceFactory.IPlace,
    'project' | 'typeOf' | 'branchCode' | 'containedInPlace' | 'additionalProperty' | 'name'
> {
    typeOf: PlaceType.Seat;
    /**
     * 枝番号
     */
    branchCode: string;
    /**
     * 名称
     */
    name?: IMultilingualString;
    /**
     * 座席タイプ
     */
    seatingType?: ISeatingType;
}

export interface IPlaceWithOffer extends IPlace {
    offers?: IOffer[];
}

export interface ISearchConditions {
    $projection?: { [key: string]: number };
    limit?: number;
    page?: number;
    sort?: any;
    project?: { id?: { $eq?: string } };
    branchCode?: {
        $eq?: string;
        $in?: string[];
        $regex?: string;
    };
    containedInPlace?: {
        branchCode?: {
            $eq?: string;
            $in?: string[];
        };
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
