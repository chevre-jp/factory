import { IPriceSpecification as IGenericPriceSpecification } from '../priceSpecification';
import PriceSpecificationType from '../priceSpecificationType';
import * as ReservationFactory from '../reservation';
import ReservationType from '../reservationType';

export type IPriceSpecification = IGenericPriceSpecification<PriceSpecificationType>;

export type ISubReservation = ReservationFactory.IReservation<IPriceSpecification>;

/**
 * 予約パッケージインターフェース
 */
export interface IReservation extends ReservationFactory.IReservation<IPriceSpecification> {
    /**
     * The individual reservations included in the package. Typically a repeated property.
     */
    subReservation?: ISubReservation[];
    typeOf: ReservationType.ReservationPackage;
}

/**
 * 検索条件
 */
export interface ISearchConditions extends ReservationFactory.ISearchConditions<ReservationType.ReservationPackage> {
}
