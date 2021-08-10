import * as CreativeWorkFactory from '../../creativeWork';
import CreativeWorkType from '../../creativeWorkType';
import { IThing } from '../../thing';

export interface IParticipant {
    typeOf?: string;
    name: string;
    email: string;
}

export interface IAbout extends IThing {
    typeOf: 'Thing';
    identifier: string;
    name: string;
}

export interface IAttributes {
    typeOf: CreativeWorkType.EmailMessage;
    sender: IParticipant;
    toRecipient: IParticipant;
    about: IAbout;
    text: string;
}

/**
 * Eメールメッセージインターフェース
 */
export type ICreativeWork = IAttributes & CreativeWorkFactory.ICreativeWork;

/**
 * Eメールカスタマイズオプションインターフェース
 */
export interface ICustomization {
    /**
     * 送信者
     */
    sender?: {
        name?: string;
        email?: string;
    };
    /**
     * 受信者
     */
    toRecipient?: {
        name?: string;
        email?: string;
    };
    /**
     * 件名
     */
    about?: string | IAbout;
    /**
     * 本文テンプレート
     * 本文をカスタマイズしたい場合、PUGテンプレートを指定
     * {@link https://pugjs.org/api/getting-started.html}
     */
    template?: string;
    /**
     * 変数変換の必要がない場合の本文指定
     */
    text?: string;
}
