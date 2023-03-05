import { IAttributes as IRegisterServiceActionAttributes } from '../action/interact/register/service';
import { IAttributes as IMoneyTransferActionAttributes, IPointAward } from '../action/transfer/moneyTransfer';
import * as AssetTransactionFactory from '../assetTransaction';
import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { OfferType } from '../offerType';
import { IPermit } from '../permit';
import { IProduct } from '../product';

// 最適化(2022-05-27~)
export import IAgent = AssetTransactionFactory.IAgent;
export type IStartParamsWithoutDetail =
    AssetTransactionFactory.IStartParams<AssetTransactionType.RegisterService, IAgent, undefined, IObjectWithoutDetail>;
/**
 * 取引開始パラメーター
 * サービス: MembershipService,PaymentCardであればserviceOutputを発行する
 */
export type IStartParams = AssetTransactionFactory.IStartParams<AssetTransactionType.RegisterService, IAgent, undefined, IObject>;
/**
 * 確定パラメータ
 */
export interface IConfirmParams {
    id?: string;
    transactionNumber?: string;
    /**
     * 取引確定日時を指定する
     * serviceOutputのvalidFromに適用される
     */
    endDate?: Date;
}
// tslint:disable-next-line:no-empty-interface
export interface IResult {
}
/**
 * エラー
 */
export type IError = any;
export interface IAcceptedPointAward {
    purpose?: { identifier?: string };
    recipient?: any;
    /**
     * 特典付与先
     */
    toLocation?: {
        /**
         * カード番号
         */
        identifier: string;
        issuedThrough: {
            /**
             * カード発行サービスID
             */
            id: string;
        };
    };
}
export type IServiceOutput = IPermit;
export interface IAcceptedItemOffered {
    id?: string;
    pointAward?: IAcceptedPointAward;
    serviceOutput?: IServiceOutput;
}
export interface IAcceptedOfferWithoutDetail {
    typeOf: OfferType.Offer;
    id: string;
    itemOffered: IAcceptedItemOffered;
}
// IProductを最適化(2022-08-19~)
export interface IItemOffered extends Pick<IProduct, 'id' | 'project' | 'serviceOutput' | 'typeOf'> {
    serviceOutput: IServiceOutput;
    pointAward?: IPointAward;
}
export interface IAcceptedOffer {
    typeOf: OfferType.Offer;
    id: string;
    itemOffered: IItemOffered;
}
export type IObjectWithoutDetail = IAcceptedOfferWithoutDetail[];
export type IObject = IAcceptedOffer[];
export interface IPotentialActions {
    moneyTransfer: IMoneyTransferActionAttributes[];
    registerService: IRegisterServiceActionAttributes[];
}
export interface IAttributes extends AssetTransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}
/**
 * 取引
 */
export type ITransaction = IExtendId<IAttributes>;
export interface ISearchConditions extends AssetTransactionFactory.ISearchConditions<AssetTransactionType.RegisterService> {
    object?: {
        itemOffered?: {
            serviceOutput?: {
                /**
                 * 発行許可証識別子
                 */
                identifier?: {
                    $eq?: string;
                    $in?: string[];
                };
            };
        };
    };
}
