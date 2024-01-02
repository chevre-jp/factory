import { IPaymentCard } from '../paymentCard';

/**
 * 有効性確認済みカード
 */
export interface ICheckedCard extends IPaymentCard {
    /**
     * カード登録連番
     */
    cardSeq: string;
    /**
     * カード会社略称
     */
    cardName: string;
    /**
     * カード番号
     */
    cardNo: string;
    /**
     * 有効期限
     */
    expire: string;
    /**
     * 名義人
     */
    holderName: string;
    /**
     * delete flag
     */
    deleteFlag: string;
}

/**
 * 生の有効性確認前GMOカード
 */
export interface IUncheckedCardRaw {
    /**
     * カード番号
     */
    cardNo: string;
    /**
     * カードパスワード
     */
    cardPass?: string;
    /**
     * 有効期限
     */
    expire: string;
    /**
     * 名義人
     */
    holderName: string;
}

/**
 * トークン化有効性確認前GMOカード
 */
export interface IUncheckedCardTokenized {
    token: string;
}

/**
 * オーソリ取得前の会員カード
 */
export interface IUnauthorizedCardOfMember {
    memberId: string;
    cardSeq: number;
    cardPass?: string;
}

/**
 * 3DS対応クレジットカード
 */
export interface ICreditCard3DS {
    /**
     * 加盟店戻りURL
     * 3Dセキュア認証後にお戻しする加盟店様側のURLになります。
     */
    retUrl?: string;
}
