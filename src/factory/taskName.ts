/**
 * タスク名
 */
enum TaskName {
    Reserve = 'reserve',
    CancelReservation = 'cancelReservation',
    CancelPendingReservation = 'cancelPendingReservation',
    AggregateOnProject = 'aggregateOnProject',
    AggregateScreeningEvent = 'aggregateScreeningEvent',
    AggregateUseActionsOnEvent = 'aggregateUseActionsOnEvent',
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
     * 予約取消
     */
    ConfirmCancelReserve = 'confirmCancelReserve',
    /**
     * 予約確定
     */
    ConfirmReservation = 'confirmReservation',
    /**
     * 通貨転送
     */
    ConfirmMoneyTransfer = 'confirmMoneyTransfer',
    /**
     * 決済
     */
    ConfirmPay = 'confirmPay',
    /**
     * 返金
     */
    ConfirmRefund = 'confirmRefund',
    /**
     * サービス登録
     */
    ConfirmRegisterService = 'confirmRegisterService',
    /**
     * 会員削除
     */
    DeleteMember = 'deleteMember',
    /**
     * ポイントインセンティブ付与
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
     * ポイントインセンティブ返却
     */
    ReturnPointAward = 'returnPointAward',
    /**
     * 注文配送
     */
    SendOrder = 'sendOrder',
    /**
     * メンバーシップ登録解除
     */
    UnRegisterProgramMembership = 'unRegisterProgramMembership',
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
export default TaskName;
