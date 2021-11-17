import * as OrderFactory from '../../../order';
import { ObjectType as AuthorizePointAwardActionObjectType } from '../../authorize/award/point';
import * as GiveActionFactory from '../give';

export import ObjectType = AuthorizePointAwardActionObjectType;

/**
 * ポイント付与対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    /**
     * 入金識別子
     */
    identifier?: string;
    amount: number;
    toLocation: {
        /**
         * 入金先カード番号
         */
        accountNumber: string;
    };
    description: string;
}

export type IResult = any;

/**
 * 目的は注文
 * 注文に対するインセンティブとしてポイントが付与される仕組み
 */
export type IPurpose = OrderFactory.ISimpleOrder;

export type IPotentialActions = any;
export interface IAttributes extends GiveActionFactory.IAttributes<IObject, IResult> {
    purpose: IPurpose;
}

/**
 * ポイント付与アクションインターフェース
 */
export type IAction = GiveActionFactory.IAction<IAttributes>;
