import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';

export type IAgent = ActionFactory.IParticipantAsPerson
    | ActionFactory.IParticipantAsWebApplication
    | ActionFactory.IParticipantAsSoftwareApplication;
export type IObject = any;
export type IResult = any;
export type IReplacer = any;

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.ReplaceAction, TObject, TResult> {
    potentialActions?: never;
    replacer?: IReplacer;
}

/**
 * 置換アクション
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
