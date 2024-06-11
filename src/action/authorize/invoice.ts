import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { IInvoice } from '../../invoice';
import { IRecipe } from '../../recipe/authorizeInvoice';
import * as AuthorizeActionFactory from '../authorize';

export { IRecipe };
export type IAgent = ActionFactory.IParticipantAsProject;
export type IObject = Pick<IInvoice, 'paymentMethodId' | 'typeOf'>;
// tslint:disable-next-line:no-empty-interface
export interface IResult { }
export interface IAttributes extends Pick<
    AuthorizeActionFactory.IAttributes<IObject, IResult>,
    'agent' | 'error' | 'object' | 'result' | 'project' | 'typeOf'
> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
}
/**
 * 請求承認アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
