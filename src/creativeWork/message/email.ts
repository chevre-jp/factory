import * as CreativeWorkFactory from '../../creativeWork';
import { CreativeWorkType } from '../../creativeWorkType';
import { IProject } from '../../project';
import { IThing } from '../../thing';

export interface IParticipant {
    typeOf?: string;
    name: string;
    email: string;
}

export enum AboutIdentifier {
    OnOrderSent = 'OnOrderSent',
    OnOrderRefunded = 'OnOrderRefunded',
    OnOrderReturned = 'OnOrderReturned',
    OnEventStatusChanged = 'OnEventStatusChanged'
}

export interface IAbout extends Pick<IThing, 'name'> {
    typeOf: 'Thing';
    identifier: AboutIdentifier;
    name: string;
}

/**
 * Eメールメッセージ
 */
export interface ICreativeWork extends Pick<
    CreativeWorkFactory.ICreativeWork,
    'id' | 'identifier' | 'name' | 'typeOf'
> {
    project?: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: CreativeWorkType.EmailMessage;
    sender: IParticipant;
    // multiple対応(2023-03-06~)
    toRecipient: IParticipant[];
    about: IAbout;
    text: string;
}
export interface ICustomizedParticipant {
    name?: string;
    email?: string;
}
/**
 * Eメールカスタマイズオプション
 */
export interface ICustomization {
    /**
     * 送信者
     */
    sender?: ICustomizedParticipant;
    /**
     * 受信者
     * multiple対応(2023-03-06~)
     */
    toRecipient?: ICustomizedParticipant | ICustomizedParticipant[];
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
