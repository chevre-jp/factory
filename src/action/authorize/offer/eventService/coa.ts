import * as COA from '@motionpicture/coa-service';

export interface ICOATicketInfo {
    /**
     * チケットコード
     */
    ticketCode: string;
    /**
     * ムビチケ・ＭＧ計上単価
     * ムビチケ・ＭＧの場合、計上単価（興収報告単価）をセット
     * （ムビチケ・ＭＧ以外は0をセット）
     */
    mvtkAppPrice: number;
    /**
     * 枚数
     */
    ticketCount: number;
    /**
     * メガネ単価
     * メガネ代が別途発生した場合は、メガネ代をセット。それ以外は０をセット（ムビチケの場合も同様）
     */
    addGlasses: number;
    /**
     * ムビチケ・ＭＧ映写方式区分
     * ムビチケ・ＭＧ連携情報より
     */
    kbnEisyahousiki: string;
    /**
     * ムビチケ・ＭＧ購入管理番号
     * ムビチケ・ＭＧ連携情報より（ムビチケ・ＭＧ以外は""）
     */
    mvtkNum: string;
    /**
     * ムビチケ・ＭＧ電子券区分
     * ムビチケ・ＭＧ連携情報より（01：電子、02：紙）
     * ※ムビチケ・ＭＧ以外は"00"をセット
     * ※ＭＧはチケット媒体区分
     */
    mvtkKbnDenshiken: string;
    /**
     * ムビチケ・ＭＧ前売券区分
     * ムビチケ・ＭＧ連携情報より（01：全国券、02：劇場券）
     * ※ムビチケ・ＭＧ以外は"00"をセット
     * ※ＭＧはスコープ区分
     */
    mvtkKbnMaeuriken: string;
    /**
     * ムビチケ・ＭＧ券種区分
     * ムビチケ・ＭＧ連携情報より（01：一般2Ｄ、02：小人2Ｄ、03：一般3Ｄ、…）
     * ※ムビチケ・ＭＧ以外は"00"をセット
     */
    mvtkKbnKensyu: string;
    /**
     * ムビチケ・ＭＧ販売単価
     * ムビチケ・ＭＧ連携情報より（ムビチケ・ＭＧ以外は0をセット）
     */
    mvtkSalesPrice: number;
    /**
     * ＭＧチケット区分
     * ＭＧチケットの場合は"MG"（ＭＧ以外は""をセット）
     */
    kbnMgtk?: string;
    /**
     * ポイント割引の場合の消費ポイント
     */
    usePoint?: number;
}

/**
 * COA券種情報
 */
export type ICOATicketInfoWithDetails = COA.factory.reserve.IUpdReserveTicket & {
    /**
     * チケット名
     */
    ticketName: string;
    /**
     * チケット名（カナ）
     */
    ticketNameKana: string;
    /**
     * チケット名（英）
     */
    ticketNameEng: string;
    /**
     * ポイント割引の場合の消費ポイント
     */
    usePoint: number;
    /**
     * 制限単位(001：ｎ人単位、002：ｎ人以上)
     */
    limitUnit: string;
    /**
     * 人数制限
     */
    limitCount: number;
    /**
     * 販売可能チケットのsalePrice
     * COA予約確定時に指定するsalePriceと異なる
     */
    salesTicketSalePrice: number;
};

/**
 * 座席予約供給情報インターフェース
 */
export interface IOffer {
    /**
     * seat section
     */
    seatSection: string;
    /**
     * seat number
     */
    seatNumber: string;
    /**
     * ticket info
     */
    ticketInfo: ICOATicketInfo;
}
