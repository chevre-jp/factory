import * as ActionFactory from '../../action';
import ActionType from '../../actionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = any;
export type IResult = any;
export type ILocation = any;

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.GiveAction, TObject, TResult> {
    recipient: IRecipient;
    fromLocation?: ILocation;
    toLocation?: ILocation;
}
/**
 * 付与アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
