import * as CreativeWorkFactory from '../../creativeWork';
import CreativeWorkType from '../../creativeWorkType';

export interface IParticipant {
    typeOf?: string;
    name: string;
    email: string;
}
export interface IAttributes {
    typeOf: CreativeWorkType.EmailMessage;
    sender: IParticipant;
    toRecipient: IParticipant;
    about: string;
    text: string;
}
/**
 * Eメールメッセージインタエーフェース
 */
export type ICreativeWork = IAttributes & CreativeWorkFactory.ICreativeWork;
