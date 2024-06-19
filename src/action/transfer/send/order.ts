import {
    IParticipantAsCustomer,
    IParticipantAsPerson,
    IParticipantAsProject,
    IParticipantAsWebApplication
} from '../../../action';
import * as OrderFactory from '../../../order';
import { IGood, IOwnershipInfo } from '../../../ownershipInfo';
import * as SendActionFactory from '../send';

export type IAgent = IParticipantAsPerson | IParticipantAsProject | IParticipantAsWebApplication;
export type IRecipient = IParticipantAsWebApplication | IParticipantAsPerson | IParticipantAsCustomer;
export type IObject = OrderFactory.ISimpleOrder & {
    /**
     * 配送対象オファー(2024-01-11~)
     */
    acceptedOffers?: {
        limit: number;
        page: number;
    };
};
/**
 * 注文配送結果としての所有権
 */
export type IResult = IOwnershipInfo<IGood>[];
// 注文処理中のメッセージ送信として機能しているので廃止(2024-06-21~)
// export interface IPotentialActions {
//     // moneyTransfer?: IMoneyTransferActionAttributes[]; // 通貨転送アクション廃止(2024-01-29~)
//     // registerService?: IRegisterServiceAttributes[]; // サービス登録アクション廃止(2024-01-30~)
//     // sendEmailMessage?: ISendEmailMessage[]; // optimize(2024-05-07~)
// }
export interface IAttributes extends Pick<
    SendActionFactory.IAttributes<IObject, IResult>,
    'typeOf' | 'result' | 'recipient' | 'project' | 'object' | 'error' | 'agent'
> {
    agent: IAgent;
    recipient: IRecipient;
    // potentialActions?: IPotentialActions; // discontinue(2024-06-21~)
}
/**
 * 注文配送アクション
 */
export type IAction = SendActionFactory.IAction<IAttributes>;
