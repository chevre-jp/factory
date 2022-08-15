import { IParticipantAsPerson, IParticipantAsWebApplication } from '../../../action';
import { PlaceType } from '../../../placeType';
import { IReservation } from '../../../reservation/event';
import * as UseActionFactory from '../use';

export type IAgent = IParticipantAsPerson | IParticipantAsWebApplication;
export type IObject = IReservation[];
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
