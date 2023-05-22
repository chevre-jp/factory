import { IMultilingualString } from './multilingualString';
import { ProductType } from './product';
import { IProject } from './project';
import { IQuantitativeValue } from './quantitativeValue';
import { ReservationType } from './reservationType';
import { SortType } from './sortType';
import { UnitCode } from './unitCode';

type IGracePeriodBeforeStart = Pick<
    IQuantitativeValue<UnitCode.Sec>,
    'maxValue' | 'minValue' | 'typeOf' | 'unitCode'
>;
export interface IItemOffered {
    typeOf: ProductType.EventService;
    serviceOutput?: {
        typeOf: ReservationType.EventReservation;
        reservationFor: {
            gracePeriodBeforeStart?: IGracePeriodBeforeStart;
        };
    };
}
export interface IOfferItemCondition {
    id?: string;
    identifier: string;
    itemOffered: IItemOffered;
    name: IMultilingualString;
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: 'OfferItemCondition';
}

export interface ISortOrder {
    identifier?: SortType;
}

export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
    };
    id?: {
        $eq?: string;
        $in?: string[];
    };
    identifier?: {
        $eq?: string;
        $in?: string[];
    };
}
