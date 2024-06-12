import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { IInvoice } from '../../invoice';
import { IRecipe as IAuthorizeInvoiceRecipe } from '../../recipe/authorizeInvoice';
import { IRecipe as IAuthorizeInvoice3dsRecipe } from '../../recipe/authorizeInvoice3ds';
import * as AuthorizeActionFactory from '../authorize';

// 3DSecureの場合レシピが異なる
export { IAuthorizeInvoiceRecipe, IAuthorizeInvoice3dsRecipe };
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
