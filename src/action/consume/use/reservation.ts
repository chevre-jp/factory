import { IParticipantAsPerson, IParticipantAsWebApplication } from '../../../action';
import { PlaceType } from '../../../placeType';
import { ITicket, ITicketType } from '../../../reservation';
import { IIssuedThrough, IReservation, IReservationFor } from '../../../reservation/event';
import { ObjectType } from '../../check/token';
import * as UseActionFactory from '../use';

export type IAgent = IParticipantAsPerson | IParticipantAsWebApplication;
// optimize(2024-05-06~)
export interface IReservationAsObject extends Pick<IReservation, 'id' | 'reservationNumber' | 'typeOf'> {
    issuedThrough: Pick<IIssuedThrough, 'id' | 'typeOf'>;
    reservationFor: Pick<IReservationFor, 'id' | 'typeOf'>;
    reservedTicket: Pick<ITicket, 'identifier' | 'ticketedSeat' | 'typeOf'> & {
        ticketType: Pick<ITicketType, 'id' | 'identifier' | 'typeOf'>;
    };
}
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
export interface IInstrument {
    /**
     * JWT
     */
    token?: string;
    /**
     * 承認コード
     */
    ticketToken?: string; // add(2024-02-28~)
    typeOf: ObjectType.Ticket;
}
export interface IAttributes extends UseActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    instrument: IInstrument;
    location?: ILocation;
}
/**
 * 予約使用アクション
 */
export type IAction = UseActionFactory.IAction<IAttributes>;
