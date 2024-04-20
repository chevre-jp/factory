/**
 * タスク名
 */
export enum TaskName {
    /**
     * 口座転送
     */
    AccountMoneyTransfer = 'accountMoneyTransfer',
    AggregateOffers = 'aggregateOffers',
    AggregateScreeningEvent = 'aggregateScreeningEvent',
    AggregateUseActionsOnEvent = 'aggregateUseActionsOnEvent',
    /**
     * 決済承認(2024-04-20~)
     */
    AuthorizePayment = 'authorizePayment',
    /**
     * 口座転送中止
     */
    CancelAccountMoneyTransfer = 'cancelAccountMoneyTransfer',
    CancelMoneyTransfer = 'cancelMoneyTransfer',
    CancelReservation = 'cancelReservation',
    CancelPendingReservation = 'cancelPendingReservation',
    /**
     * リソース検証
     */
    CheckResource = 'checkResource',
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
     * 経理レポート作成
     */
    CreateAccountingReport = 'createAccountingReport',
    /**
     * イベント作成
     */
    CreateEvent = 'createEvent',
    DeleteTransaction = 'deleteTransaction',
    /**
     * ポイント特典付与
     */
    GivePointAward = 'givePointAward',
    ImportEventCapacitiesFromCOA = 'importEventCapacitiesFromCOA',
    ImportEventsFromCOA = 'importEventsFromCOA',
    ImportOffersFromCOA = 'importOffersFromCOA',
    MoneyTransfer = 'moneyTransfer',
    OnAssetTransactionStatusChanged = 'onAssetTransactionStatusChanged',
    OnAuthorizationCreated = 'onAuthorizationCreated',
    OnEventChanged = 'onEventChanged',
    OnResourceUpdated = 'onResourceUpdated',
    OnOrderPaymentCompleted = 'onOrderPaymentCompleted',
    // OrderProgramMembership = 'orderProgramMembership', // 廃止(2023-08-18~)
    Pay = 'pay',
    /**
     * 注文受付
     */
    PlaceOrder = 'placeOrder',
    Refund = 'refund',
    RegisterService = 'registerService',
    /**
     *  Eメールメッセージ送信
     */
    Reserve = 'reserve',
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
    SendEmailMessage = 'sendEmailMessage',
    /**
     * 注文配送
     */
    SendOrder = 'sendOrder',
    /**
     * ウェブフックをたたく
     */
    TriggerWebhook = 'triggerWebhook',
    UseReservation = 'useReservation',
    VoidPayment = 'voidPayment',
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
    VoidReserveTransaction = 'voidReserveTransaction'
}
