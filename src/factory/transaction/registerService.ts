import { IAttributes as IRegisterServiceActionAttributes } from '../action/interact/register/service';
import { IAttributes as IMoneyTransferActionAttributes } from '../action/transfer/moneyTransfer';
import { IExtendId } from '../autoGenerated';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

export type IStartParamsWithoutDetail =
    TransactionFactory.IStartParams<TransactionType.RegisterService, IAgent, undefined, IObjectWithoutDetail>;

/**
 * 取引開始パラメーターインターフェース
 */
export type IStartParams = TransactionFactory.IStartParams<TransactionType.RegisterService, IAgent, undefined, IObject>;

export interface IAgent {
    typeOf: string;
    id?: string;
    name: string;
    url?: string;
}

/**
 * サービスアウトプット通知パラメータ
 */
export interface IInformServiceOutputParams {
    /**
     * 通知先
     */
    recipient?: {
        /**
         * 通知URL
         */
        url?: string;
    };
}

export interface IPotentialActionsParams {
    registerService?: {
        potentialActions?: {
            informServiceOutput?: IInformServiceOutputParams[];
        };
    };
}

/**
 * 確定パラメーターインターフェース
 */
export interface IConfirmParams {
    id?: string;
    object?: any;
    potentialActions?: IPotentialActionsParams;
}

// tslint:disable-next-line:no-empty-interface
export interface IResult {
}

/**
 * エラーインターフェース
 */
export type IError = any;

export type IObjectWithoutDetail = any;

/**
 * 取引対象物インターフェース
 */
export type IObject = any;

export interface IPotentialActions {
    moneyTransfer: IMoneyTransferActionAttributes[];
    registerService: IRegisterServiceActionAttributes[];
}

export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

/**
 * 取引インターフェース
 */
export type ITransaction = IExtendId<IAttributes>;

export interface ISearchConditions extends TransactionFactory.ISearchConditions<TransactionType.RegisterService> {
    object?: any;
}
