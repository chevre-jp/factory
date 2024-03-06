import * as ActionFactory from '../../../action';
import * as OrderFactory from '../../../order';
import { ObjectType as AuthorizePointAwardActionObjectType } from '../../authorize/award/point';
import * as GiveActionFactory from '../give';

// export type IAgent = ActionFactory.IParticipantAsProject; // 変更(2024-03-06~)
export type IAgent = ActionFactory.IParticipantAsSeller;
export import ObjectType = AuthorizePointAwardActionObjectType;
/**
 * ポイント特典付与対象
 */
export interface IObject {
    typeOf: ObjectType;
    /**
     * 入金識別子
     */
    identifier?: string;
    amount: number;
    /**
     * 入金先カード
     */
    toLocation: {
        /**
         * 入金先カード番号
         * 口座番号ではないので注意
         */
        accountNumber: string;
        issuedThrough: {
            /**
             * カード発行サービスID
             */
            id: string;
        };
    };
    description: string;
}
export type IResult = any;
/**
 * 目的は注文
 * 注文に対する特典としてポイントが付与される仕組み
 */
export type IPurpose = OrderFactory.ISimpleOrder;
export type IPotentialActions = any;
export interface IAttributes extends GiveActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    purpose: IPurpose;
}
/**
 * ポイント特典付与アクション
 */
export type IAction = GiveActionFactory.IAction<IAttributes>;
