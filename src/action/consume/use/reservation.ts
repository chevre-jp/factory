import { IParticipantAsPerson, IParticipantAsWebApplication } from '../../../action';
import { PlaceType } from '../../../placeType';
import { IReservation } from '../../../reservation/event';
import { ObjectType } from '../../check/token';
import * as UseActionFactory from '../use';

export type IAgent = IParticipantAsPerson | IParticipantAsWebApplication;
export type IReservationAsObject = Pick<IReservation, 'id' | 'issuedThrough' | 'reservationFor' | 'reservationNumber' | 'reservedTicket' | 'typeOf'>;
// オブジェクト最適化(2023-01-30~)
export type IObject = IReservationAsObject[];
// tslint:disable-next-line:no-empty-interface
export interface IResult { }
export interface ILocation {
    typeOf: PlaceType.Place;
    /**
     * 入場ゲートコード
     */
    identifier: string;
}
export type IPotentialActions = any;
export interface IInstrument {
    token?: string;
    typeOf: ObjectType.Ticket;
}
export interface IAttributes extends UseActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    instrument?: IInstrument;
    location?: ILocation;
    potentialActions?: IPotentialActions;
}
/**
 * 予約使用アクション
 */
export type IAction = UseActionFactory.IAction<IAttributes>;
