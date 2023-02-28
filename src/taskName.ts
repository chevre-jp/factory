/**
 * タスク名
 */
export enum TaskName {
    Reserve = 'reserve',
    CancelReservation = 'cancelReservation',
    CancelPendingReservation = 'cancelPendingReservation',
    AggregateScreeningEvent = 'aggregateScreeningEvent',
    AggregateUseActionsOnEvent = 'aggregateUseActionsOnEvent',
    DeleteAssetTransaction = 'deleteAssetTransaction',
    DeleteOrder = 'deleteOrder',
    DeleteTransaction = 'deleteTransaction',
    ImportEventCapacitiesFromCOA = 'importEventCapacitiesFromCOA',
    ImportEventsFromCOA = 'importEventsFromCOA',
    ImportOffersFromCOA = 'importOffersFromCOA',
    CancelMoneyTransfer = 'cancelMoneyTransfer',
    MoneyTransfer = 'moneyTransfer',
    Refund = 'refund',
    RegisterService = 'registerService',
    Pay = 'pay',
    /**
     *  Eメールメッセージ送信
     */
    SendEmailMessage = 'sendEmailMessage',
    /**
     * ウェブフックをたたく
     */
    TriggerWebhook = 'triggerWebhook',
    VoidPayment = 'voidPayment',
    /**
     * 通貨転送
     */
    ConfirmMoneyTransfer = 'confirmMoneyTransfer',
    /**
     * サービス登録
     */
    ConfirmRegisterService = 'confirmRegisterService',
    /**
     * 決済資産取引確定
     */
    ConfirmPayTransaction = 'confirmPayTransaction',
    /**
     * サービス登録資産取引確定
     */
    ConfirmRegisterServiceTransaction = 'confirmRegisterServiceTransaction',
    /**
     * 予約資産取引確定
     */
    ConfirmReserveTransaction = 'confirmReserveTransaction',
    /**
     * 会員削除
     */
    DeleteMember = 'deleteMember',
    /**
     * ポイント特典付与
     */
    GivePointAward = 'givePointAward',
    /**
     * メンバーシップ注文
     */
    OrderProgramMembership = 'orderProgramMembership',
    /**
     * 注文受付
     */
    PlaceOrder = 'placeOrder',
    /**
     * 注文返品
     */
    ReturnOrder = 'returnOrder',
    /**
     * 入金返却
     */
    ReturnMoneyTransfer = 'returnMoneyTransfer',
    /**
     * 決済資産取引返却
     */
    ReturnPayTransaction = 'returnPayTransaction',
    /**
     * ポイント特典返却
     */
    ReturnPointAward = 'returnPointAward',
    /**
     * 予約資産取引返却
     */
    ReturnReserveTransaction = 'returnReserveTransaction',
    /**
     * 注文配送
     */
    SendOrder = 'sendOrder',
    /**
     * 通貨転送中止
     */
    VoidMoneyTransferTransaction = 'voidMoneyTransferTransaction',
    /**
     * 決済中止
     */
    VoidPayTransaction = 'voidPayTransaction',
    /**
     * サービス登録中止
     */
    VoidRegisterServiceTransaction = 'voidRegisterServiceTransaction',
    /**
     * 予約中止
     */
    VoidReserveTransaction = 'voidReserveTransaction',

    /**
     * 口座転送中止
     */
    CancelAccountMoneyTransfer = 'cancelAccountMoneyTransfer',
    /**
     * 口座転送
     */
    AccountMoneyTransfer = 'accountMoneyTransfer'
}
