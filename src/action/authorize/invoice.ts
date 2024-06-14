import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { AssetTransactionType } from '../../assetTransactionType';
import { IInvoice } from '../../invoice';
import { IEntryTranArgs, IEntryTranResult, IExecTranArgs, IExecTranResult, IRecipe as IAuthorizeInvoiceRecipe } from '../../recipe/authorizeInvoice';
import { IRecipe as IAuthorizeInvoice3dsRecipe, ISecureTran2Args, ISecureTran2Result } from '../../recipe/authorizeInvoice3ds';
import * as AuthorizeActionFactory from '../authorize';

// 3DSecureの場合レシピが異なる
export {
    IEntryTranArgs, IEntryTranResult, IExecTranArgs, IExecTranResult,
    ISecureTran2Args, ISecureTran2Result,
    IAuthorizeInvoiceRecipe, IAuthorizeInvoice3dsRecipe
};
export type IAgent = ActionFactory.IParticipantAsProject;
export type IObject = Pick<IInvoice, 'paymentMethodId' | 'typeOf'>;
// tslint:disable-next-line:no-empty-interface
export interface IResult { }
export interface ISameAs extends ActionFactory.ISameAs {
    typeOf: AssetTransactionType.Pay;
}
export interface IAttributes extends Pick<
    AuthorizeActionFactory.IAttributes<IObject, IResult>,
    'agent' | 'error' | 'object' | 'result' | 'project' | 'typeOf' | 'sameAs'
> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    sameAs: ISameAs;
}
/**
 * 請求承認アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
