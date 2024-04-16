import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';

export type IObject = any;
export type IResult = any;
export interface IAttributes<TObject, TResult> extends Pick<
    ActionFactory.IAttributes<ActionType.UseAction, TObject, TResult>,
    'typeOf' | 'result' | 'project' | 'object' | 'location' | 'error' | 'instrument' | 'agent'
> {
}
/**
 * 使用アクション
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
