# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## Unreleased

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## v4.376.0 - 2024-06-28

### Added

- add errors.Internal
- add errors.Unknown

### Changed

- optimize placeOrder.potentialActions
- optimize ISimpleOrder

### Removed

- discontinue orderAction.potentialActions

## v4.375.0 - 2024-06-26

### Added

- add assetTransactionType.COAReserveTransaction
- add project.hasMerchantReturnPolicy.identifier
- add seller.hasMerchantReturnPolicy.identifier

### Changed

- optimize placeOrder(object,result)
- optimize returnOrder(potentialActions)
- extend assetTransaction.ISearchConditions
- extend transaction.ISearchConditions
- redefine returnPaymentMethodAction as returnInvoiceAction
- redefine authorizeEventServiceOfferAction.result as AggregateOffer
- optimize action.ISearchConditions
- optimize returnPayTransaction task
- optimize authorizePaymentAction
- optimize orderAction
- optimize sendOrderAction
- optimize authorizeEventServiceOfferAction
- optimize checkMovieTicket task

### Removed

- discontinue authorizeOfferAction.result.acceptedOffers
- discontinue assetTransaction.tasksExportedAt
- discontinue assetTransaction.tasksExportationStatus
- discontinue transaction.tasksExportedAt
- discontinue transaction.tasksExportationStatus
- discontinue transactionTasksExportationStatus
- discontinue placeOrder.result.options.ignoreAccpetedOffersFromResult
- discontinue authorizeEventServiceOfferAction.object.acceptedOffer

## v4.374.0 - 2024-06-14

### Added

- define action recipe
- add confirmAction.sameAs
- add authorizeCOAOffer.object.id
- add authorizeInvoiceAction

### Changed

- optimize placeOrder.object.paymentMethods
- optimize payAction(result,instrument)
- optimize refundAction(result,agent)
- optimize checkMovieTicketAction.result
- optimize returnReserveTransaction task
- optimize acceptCOAOfferAction.instrument
- optimize authorizeCOAOfferAction.result
- optimize payTransaction(object,potentialActions)
- optimize payTask.data
- update @surfrock/sdk
- redefine payAction.instrument

### Removed

- discontinue useCheckMovieTicketBeforePay option on starting payTransaction

## v4.373.0 - 2024-05-30

### Added

- add placeOrder.instrument

## v4.372.0 - 2024-05-30

### Changed

- extend transaction.ISearchConditions

## v4.371.0 - 2024-05-30

### Added

- 決済カード認証タスクを追加
- 決済URL発行タスクを追加
- define acceptPayAction
- support async acceptCOAOffer
- export IMkknInfo,IYkknInfo,IPurchaseNumberInfo on checkMovieTicketAction

### Changed

- redefine transaction.ITasksExportAction

## v4.370.0 - 2024-05-17

### Changed

- discontinue order.IPersonCustomer.memberOf
- discontinue placeOrder.agent.memberOf
- optimize placeOrder.object.clientUser
- support SoftwareApplication as an action participant

## v4.369.1 - 2024-05-14

### Changed

- optimize packages

## v4.369.0 - 2024-05-14

### Added

- 決済サービスのavailableChannel.credentialsにuseSeatInfoSyncCancelを追加
- 承認オブジェクトをOrganizationRoleに拡張
- creativeWorkTypeにSoftwareApplicationを追加
- 承認にaudience,author,issuedByを拡張

### Changed

- Eメール送信アクションをメッセージリポジトリに対応
- 返金アクションをseatInfoSyncCancelに対応
- update @surfrock/sdk
- 予約使用アクションのobjectを最適化
- 注文取引のpotentialActionsを最適化
- IClientUserを拡張
- 顧客検索条件

## v4.368.0 - 2024-04-25

### Added

- 決済承認タスクを追加
- アクションにsameAsを追加
- タスクにexpiresを追加

## v4.367.0 - 2024-04-19

### Changed

- 注文のadditionalPropertyを廃止
- 注文のdiscountsを廃止
- 予約にチケット識別子を拡張
- 決済カードにチケット識別子を拡張
- 予約取引開始時のチケット識別子指定に対応
- アクションのpurposeを最適化
- 注文検索条件拡張
- 資産取引検索条件拡張
- 予約取消取引のobjectをReservationPackageとして再定義

## v4.366.0 - 2024-04-12

### Changed

- 予約取引のobject.subReservationを最適化
- 興行オファー承認アクションのobject.acceptedOfferを最適化
- 決済取引のobject.payActionを最適化

## v4.365.0 - 2024-04-03

### Added

- 追加特性のCategoryCodeSetに座席を追加

### Changed

- 座席にmaximumAttendeeCapacityを拡張

## v4.364.0 - 2024-03-29

### Added

- イベントに対するオファー集計タスクを追加
- AcceptActionを追加
- アクション検索条件拡張

### Changed

- 経理レポートの返金アクションをFailedActionStatusに対応
- 決済承認アクションのobjectを最適化
- イベントの予約集計IFを最適化
- COAイベントのoffersを本家に統一

### Removed

- イベント属性からaggregateEntranceGate,aggregateOfferを廃止

## v4.363.0 - 2024-03-21

### Added

- 置換アクションを追加

### Changed

- MovieTicket認証アクションのobjectを最適化
- 決済アクションのpurposeを最適化
- 返金アクションのpurposeを最適化
- 返金アクションのresultを定義
- 施設コンテンツ作成パラメータを最適化
- イベント属性を最適化

## v4.362.0 - 2024-03-14

### Added

- リソース検証タスクを追加

### Changed

- 決済取引確定アクションのagentを拡張
- 資産取引確定アクションのpotentialActionsを廃止
- 決済取引確定アクションのinstrumentを廃止
- アクションのIParticipantからidentifierを明示的に除外
- 予約取引確定アクションのinstrumentを廃止

### Removed

- 特典承認アクションを廃止

## v4.361.0 - 2024-03-11

### Changed

- 決済承認アクションのinstrumentを資産取引化
- 決済承認アクションのobjectを最適化

## v4.360.0 - 2024-03-08

### Changed

- update @motionpicture/coa-service
- update @motionpicture/gmo-service
- 施設コンテンツのcoaInfoを拡張
- 施設コンテンツのlocationを最適化(kanaNameを廃止)
- 資産取引を最適化(agent)
- 注文のorderedItem.orderedItemにidを保証
- ISimpleOrderを最適化(customer,sellerを廃止)
- 決済返却アクションのobjectを最適化
- 興行オファー承認アクションのresult.acceptedOffersへの依存排除
- 興行オファー承認アクションのinstrumentを資産取引化
- 注文取引IFを最適化

## v4.359.0 - 2024-03-01

### Changed

- 所有権のIOwnerを最適化

## v4.358.0 - 2024-02-28

### Changed

- 予約使用アクションをinstrument.ticketTokenに対応

## v4.357.0 - 2024-02-27

### Changed

- メモ拡張(provider)

## v4.356.0 - 2024-02-25

### Added

- 承認検索条件拡張

## v4.355.0 - 2024-02-22

### Added

- プロジェクト設定にtokenIssuersを追加
- プロジェクトにmakesOfferを追加

## v4.354.1 - 2024-02-16

### Changed

- update @waiter/factory

## v4.354.0 - 2024-02-15

### Added

- メモIFを追加

## v4.353.0 - 2024-02-11

### Added

- CreateAccountingReportタスクを追加
- 注文取引確定時の同期的な注文コード発行に対応
- IAMメンバー(WebApplication)に所属会員属性を追加

### Changed

- 返品取引のpotentialActionsを最適化
- 通貨転送返却アクションを最適化
- 注文取引のresultを最適化(order.acceptedOffersを除外)
- update coa-service
- update gmo-service
- 注文のIBrokerを最適化

### Removed

- 販売者のmakesOfferからeligibleMembershipを廃止

## v4.352.0 - 2024-02-01

### Added

- アクション検索条件拡張
- 注文取引のresult拡張
- 注文取引にignoreAccpetedOffersFromResultオプションを追加
- 注文取引検索条件拡張
- 決済サービスプロバイダーのIPaymentUrlSettingsにuse3DSを追加
- 注文オファーにserialNumberを追加
- オファー承認アクションにinstrument.transactionNumberを保証
- 販売者のmakesOfferにeligibleMembershipを追加
- 注文取引agentに外部メンバーシップ情報を追加

### Changed

- 決済タスクを最適化された決済アクションデータに対応
- 注文取引のpotentialActionsを最適化
- ConfirmReserveTransactionタスクのobjectを最適化
- ReserveActionのobjectを最適化
- 予約のISuperEventを最適化
- 注文のISuperEventを最適化
- タスクのreserveIfNotYetを廃止
- 通貨転送取引確定アクションを最適化
- SendOrderアクションのpotentialActionsを最適化

## v4.351.0 - 2024-01-17

### Added

- 注文取引中の外部ロケーションでの決済情報IFを拡張
- 決済サービスプロバイダーに3Dセキュア認証後加盟店戻りURLを追加
- 決済サービスプロバイダーに3Dセキュアコールバック方法を追加
- 注文の部分配送に対応
- 注文ステータスにOrderInTransitを追加

### Changed

- クレジットカードIFを3DSに対応
- 決済取引を3DSクレジットカードに対応
- OnAssetTransactionStatusChangedを予約取引に対応
- 注文取引のpotentialActions(sendOrder)を最適化

## v4.350.0 - 2023-12-27

### Changed

- 単価オファー検索条件拡張

## v4.349.0 - 2023-12-27

### Changed

- カタログ検索条件拡張

## v4.348.0 - 2023-12-26

### Changed

- 集計オファーのISubOfferを最適化
- プロダクト検索条件と決済サービス検索条件を分離

## v4.347.0 - 2023-12-22

### Added

- コンテンツのICreateParamsを追加
- オファーのICreateParamsを追加
- プロダクトのICreateParamsを追加

### Changed

- 施設コンテンツのICreateParamsを最適化
- プロダクトIFを最適化(offersを除外)
- 決済サービスIFを最適化(providerを除外)
- 決済サービスプロバイダーIFを最適化(nameを除外)

## v4.346.0 - 2023-12-09

### Changed

- IOrderからaccpetedOffersを分離

## v4.345.0 - 2023-12-08

### Changed

- セクション検索条件拡張

## v4.344.0 - 2023-12-01

### Removed

- discontinue product.ticketOffer.availableAtOrFrom

## v4.343.0 - 2023-11-29

### Added

- add unitPriceOffer.acceptedPaymentMethod
- seller.makesOfferに適用カスタマータイプを追加

### Changed

- update @waiter/factory
- 興行オファー承認をオファー未指定に対応
- 単価オファー検索条件拡張

### Removed

- discontinue placeOrder.startParams.expiresInSeconds

## v4.342.0 - 2023-11-13

### Added

- add project.hasMerchantReturnPolicy

### Changed

- discontinue project.settings.cognito

## v4.341.0 - 2023-11-10

### Added

- プロジェクト検索条件拡張

## v4.340.0 - 2023-11-08

### Changed

- 座席に対する価格構成要素を最適化

## v4.339.0 - 2023-11-08

### Changed

- 座席検索のprojectionを拡張

## v4.338.0 - 2023-11-06

### Added

- 追加特性のCategoryCodeSetに施設を追加

### Changed

- optimize movieTheater.offers

## v4.337.0 - 2023-10-30

### Changed

- 施設を最適化
- 座席の$projectionを定義
- aws-sdk -> @aws-sdk/client-cognito-identity-provider
- update typescript@5.x.x

### Removed

- 注文の非推奨決済方法区分コードを廃止

## v4.336.0 - 2023-10-26

### Changed

- 施設IFからhasPOSを除外

## v4.335.0 - 2023-10-19

### Changed

- importEventsFromCOAタスクを拡張

## v4.334.0 - 2023-09-29

### Added

- onResourceUpdatedタスクをhasPOSに対応

## v4.333.0 - 2023-09-27

### Changed

- 施設のhasPOSを再定義

## v4.332.0 - 2023-09-24

### Added

- プロジェクトのsubscriptionにuseOfferCatalogItemを追加

## v4.331.0 - 2023-09-23

### Added

- 注文検索条件拡張

## v4.330.0 - 2023-09-21

### Added

- オファーカタログにrelatedOfferを拡張
- onResourceUpdatedタスクを集計オファーに対応

### Removed

- syncAggregateOfferタスクを削除

## v4.329.0 - 2023-09-15

### Added

- タスクに識別子を追加
- 集計オファーを追加
- 集計オファー同期タスクを追加
- 単価オファー検索条件拡張
- 興行オファー承認アクションにアドオン数量指定を追加
- オファーカタログ検索条件拡張

### Changed

- 決済サービスのserviceOutputをArrayに対応
- PermitのissuedThrough.typeOfをCreditCardに対応
- 決済承認アクションのresultをArray対応
- 注文検索条件最適化
- COA興行オファー承認アクションを拡張
- オファーカタログのitemListElementをサブカタログに対応

## v4.328.0 - 2023-08-31

### Added

- 予約取引開始時のアドオン数量指定を追加

## v4.327.1 - 2023-08-30

### Deprecated

- 注文のpaymentMethods.typeOfを非推奨化(paymentMethods.paymentMethod.identifierへ移行)

## v4.327.0 - 2023-08-30

### Added

- 注文のpaymentMethodsにpaymentStatusを追加
- 資産取引検索条件拡張
- 決済取引確定タスクにprocessOrderオプションを追加
- タスク検索条件拡張
- onOrderPaymentCompletedタスクを追加
- onAssetTransactionStatusChangedタスクを追加
- 注文にinvoice.paymentMethod.identifierを決済方法区分コードとして保証
- 決済取引確定時の決済方法区分指定を追加
- 注文にpreviousOrderStatusを追加

### Changed

- 決済方法区分未指定の対面決済承認に対応
- 決済取引のobjectを最適化(paymentMethodId,paymentMethod.identifier)
- voidPayTransactionタスクをOrderCancelledに対応
- voidReserveTransactionOrderCancelledに対応

## v4.326.0 - 2023-08-22

### Added

- Eメール送信元アドレスをプロジェクト設定化

### Changed

- 注文タスクのdataを最適化
- 注文配送タスクのdataを最適化
- 返品タスクのdataを最適化

### Removed

- メンバーシップ注文タスクを廃止

## v4.325.0 - 2023-08-18

### Added

- 単価オファーに事前予約要件を追加
- 単価オファー検索条件拡張
- 決済承認アクションのresultにpaymentMethodAsObjectを追加
- 注文のpaymentMethodsにpaymentMethodを追加

### Changed

- 決済サービスのserviceOutputを再定義
- 決済取引のobject.paymentMethod.amountをIMonetaryAmountに対応

### Removed

- 決済承認アクションのresult.paymentMethodを廃止
- 注文取引のobject.authorizeActionsを廃止

## v4.324.0 - 2023-08-10

### Added

- CreditCardIF決済サービスのカード通貨区分を追加
- 注文のISellerに追加特性を追加
- 販売者の返品ポリシーに適用決済方法を追加
- 販売者検索条件拡張

### Changed

- インボイスのtotalPaymentDue.valueを必須化
- creativeWorkインターフェースを最適化

### Removed

- イベントのoffers.priceCurrencyを廃止
- 決済承認アクションのresult.amountを廃止

## v4.323.0 - 2023-08-03

### Added

- onResourceUpdatedタスクを単価オファーに対応
- onResourceUpdatedタスクをオファーカタログに対応

## v4.322.0 - 2023-08-02

### Added

- COAオファー承認パラメータにオファーごとのappliesToSurfrock指定を追加

## v4.321.1 - 2023-08-01

### Changed

- コンテンツのoffersを最適化

## v4.321.0 - 2023-07-31

### Added

- 予約取引検索条件拡張

## v4.320.0 - 2023-07-29

### Added

- onResourceUpdatedタスクを施設コンテンツに対応
- onResourceUpdatedタスクをルームに対応

## v4.319.0 - 2023-07-28

### Added

- onEventChangedタスクにuseSyncオプションを追加

## v4.318.0 - 2023-07-27

### Added

- onResourceUpdatedタスクを販売者に対応

## v4.317.0 - 2023-07-27

### Added

- onResourceUpdatedタスクをリソース削除に対応

## v4.316.0 - 2023-07-27

### Added

- 予約のproviderを必須化
- 注文検索条件拡張
- イベント作成タスクを追加
- IAMメンバーのmember.memberOfを必須化

### Changed

- 施設コンテンツのdurationを指定可能にする
- IAMメンバーを販売者メンバーに対応

## v4.315.0 - 2023-07-14

### Added

- イベントのorganizerを必須化
- イベント検索条件拡張
- ルームのparentOrganizationを必須化
- ルーム検索条件拡張
- セクション検索条件拡張
- 座席検索条件拡張

## v4.314.0 - 2023-07-07

### Added

- 販売者検索条件拡張

## v4.313.0 - 2023-07-03

### Added

- インボイスのMovieTicketに計上金額を追加
- 返金取引検索条件拡張
- OfferItemConditionを追加
- 販売者検索条件拡張
- 予約取引にdisablePendingReservationsオプションを追加
- 承認作成時タスクを追加
- 予約使用タスクを追加
- 予約取引検索条件拡張
- アクション検索条件拡張
- 予約取引のobjectにissuedThroughを保管
- 予約取引のobjectにunderNameを保管
- イベント変更時タスクを追加
- リソース変更時タスクを追加
- コンテンツ検索条件拡張
- 区分検索条件拡張
- 施設コンテンツ検索条件拡張
- イベント検索条件拡張
- ルーム検索条件拡張
- イベントのIOffer4COAに座席有無を追加
- 決済サービス検索条件拡張
- ルーム同期タスクを追加
- 追加特性のCategoryCodeSetに販売者を追加
- 取引のagent.idによる削除に対応
- 追加特性のCategoryCodeSetに区分を追加

### Changed

- 取引への承認アクションの保管を廃止
- 注文削除タスクを最適化
- 取引削除タスクを最適化
- 単価オファーの返品ポリシーを最適化
- 予約取引のobjectを最適化
- 会員削除アクションを最適化
- 予約タスクを最適化
- stockのholderを予約取引番号に対応
- 施設コンテンツの不要なproject属性を廃止
- 興行スケジュールのsuperEventを最適化
- 経理レポートを最適化
- 注文を最適化
- SendActionのIRecipientを最適化
- ISimpleOrderを最適化

### Removed

- DeleteAssetTransactionタスクを廃止
- DeleteOrderタスクを廃止
- DeleteMemberタスクを廃止

## v4.312.0 - 2023-05-02

### Added

- 取引にtasksExportActionを追加
- 資産取引にtasksExportActionを追加
- タスクにexecutorを追加

### Changed

- タスクのexecutionResultsを拡張

## v4.311.0 - 2023-04-21

### Added

- 資産取引検索条件拡張

## v4.310.0 - 2023-04-07

### Added

- 施設コンテンツのworkPerformedにversionを追加
- 施設コンテンツ検索条件拡張

## v4.309.1 - 2023-03-31

### Fixed

- 顧客ソート条件を修正

## v4.309.0 - 2023-03-29

### Added

- 決済通知の決済カード加算料金に適用決済方法区分を追加
- タスク検索条件拡張

## v4.308.0 - 2023-03-27

### Added

- MovieTicketIFの決済取引において最大同時着券数を設定可能にする
- アクション検索条件拡張

### Changed

- MovieTicket認証アクションのresultからmovieTicketsを排除

## v4.307.0 - 2023-03-22

### Changed

- 区分加算料金のappliesToCategoryCodeを最適化
- プロダクトオファー承認アクションのobjectを最適化

## v4.306.0 - 2023-03-21

### Changed

- COA興行オファー承認パラメータを最適化

## v4.305.0 - 2023-03-20

### Added

- 決済通知に予約番号を追加

### Changed

- 決済アクションのpurposeを最適化

## v4.304.0 - 2023-03-18

### Added

- COA興行オファー承認パラメータにsalesTicketSalePriceを追加

## v4.303.0 - 2023-03-16

### Changed

- プロダクトオファーのaddOnを最適化

## v4.302.0 - 2023-03-14

### Added

- 決済通知に予約チケットトークンを追加

## v4.301.0 - 2023-03-14

### Added

- COA興行オファー承認パラメータにappliesToSurfrockを拡張
- 単価オファー検索条件拡張
- COA興行オファー承認時のticketInfoを拡張

## v4.300.0 - 2023-03-09

### Added

- 単価オファー検索条件拡張

## v4.299.0 - 2023-03-08

### Added

- 追加特性のCategoryCodeSetにコンテンツを追加

## v4.298.0 - 2023-03-07

### Added

- コメントにmentionsを追加

## v4.297.0 - 2023-03-06

### Changed

- EmailのtoRecipientをmultiple対応

## v4.296.0 - 2023-03-06

### Added

- MovieTicket認証アクションにpurposeを追加

## v4.295.0 - 2023-03-06

### Changed

- プロダクトIFを最適化
- ポイント特典IFを最適化(MoneyTransferアクションに定義)
- 口座取引IFを最適化

## v4.294.0 - 2023-03-04

### Changed

- 決済承認アクションを最適化
- 決済アクションのIMovieTicketを最適化

## v4.293.0 - 2023-03-03

### Changed

- プロダクトオファーのアドオンIFを最適化
- MovieTicket認証アクションを最適化

## v4.292.0 - 2023-02-28

### Removed

- 承認削除タスクを廃止

## v4.291.0 - 2023-02-27

### Changed

- 価格仕様検索条件拡張

## v4.290.1 - 2023-02-26

### Changed

- オファーIFを最適化

## v4.290.0 - 2023-02-26

### Changed

- オファーIFを最適化

## v4.289.0 - 2023-02-25

### Added

- 注文にIDを追加
- 注文に追加特性を追加
- IAMメンバーにmember.imageを追加
- Commentを追加

### Changed

- 追加特性のCategoryCodeSetを拡張
- 注文検索条件拡張
- 口座IF最適化
- イベントのworkPerformedを廃止
- 通貨転送取引のobject.pendingTransactionを最適化
- IPermitを最適化
- 単価オファー検索条件拡張
- 決済取引のobjectを最適化
- プロダクトオファーを厳密に定義
- 単価オファーIF最適化
- タスク検索条件拡張

### Removed

- 口座からstatusを廃止
- 口座転送アクションからaccountTypeを廃止
- PermitからpaymentAccount.accountTypeを廃止

## v4.288.0 - 2023-02-11

### Added

- MovieTicket決済カードインターフェースにcategory.codeValueを追加

### Changed

- オファーカタログ検索条件拡張
- 追加特性のCategoryCodeSetを拡張

## v4.287.0 - 2023-02-04

### Changed

- オファーカタログ検索条件拡張

## v4.286.0 - 2023-02-03

### Changed

- 注文アクション最適化

## v4.285.0 - 2023-02-02

### Changed

- コンテンツ検索条件拡張

## v4.284.0 - 2023-02-01

### Added

- 単価オファーにsettingsを追加

### Changed

- 予約使用アクション最適化
- 承認オブジェクトとしての注文を最適化
- 承認オブジェクトとしての所有権を最適化
- Permit所有権のtypeOfGoodを最適化

### Removed

- プロジェクトのonReservationUsed設定を廃止

## v4.283.0 - 2023-01-18

### Changed

- タスク検索条件拡張

## v4.282.0 - 2023-01-18

### Changed

- 決済中止タスクを最適化
- 予約アクションを最適化

## v4.281.0 - 2023-01-11

### Added

- トリップインターフェースを追加
- 汎用イベントを追加(Transportationに対応)
- BusReservationインターフェースを追加
- BusStopインターフェースを追加

### Changed

- 予約取引をBusReservationに拡張
- イベントにserviceLocationを追加
- 予約にserviceLocationを追加
- 注文をBusReservationに対応
- 施設にamenityFeatureを追加
- 施設のparentOrganizationを必須化
- イベントのoffersを必須化
- 決済サービスの外部決済URL設定を拡張

## v4.280.0 - 2022-12-28

### Added

- イベント更新パラメータを追加

### Changed

- イベント作成パラメータ最適化
- 追加特性のカテゴリーセットにスケジュールを追加
- 予約取引確定パラメータからobject(予約属性明示指定)を廃止
- 興行オファー承認アクションのresultを最適化
- 施設コンテンツ、スケジュール、予約のproject属性を最適化
- 予約のunderName,issuedByを最適化
- 予約アクションオブジェクトをReservationPackageに拡張
- 予約取消アクションオブジェクトをReservationPackageに拡張
- イベント編集パラメータにPOS以外のアプリケーションの共通販売設定を追加
- 予約取消取引オブジェクトを最適化

## v4.279.0 - 2022-12-08

### Added

- 追加特性インターフェースを追加

### Changed

- 注文取引開始パラメータにexpiresInSecondsを追加
- 返品取引開始パラメータにexpiresInSecondsを追加
- イベント検索条件拡張
- 施設検索条件拡張
- コンテンツ検索条件拡張
- オファー検索条件拡張
- 区分検索条件拡張
- カタログ検索条件拡張

### Removed

- 口座アクション検索条件を廃止

## v4.278.0 - 2022-11-24

### Added

- event.offersにseller.makesOfferを追加
- 施設のオファーにPOS興行初期設定を追加

### Changed

- confirmationNumberをISimpleOrderからIOrderへ移行
- イベント検索条件拡張(offers.seller.makesOffer)

### Removed

- InvoiceのIReservationの旧価格(price)を廃止

## v4.277.0 - 2022-11-14

### Changed

- ISimpleOrderを最適化
- 座席のIPlaceWithOfferを最適化
- 注文のISeller,IOrganizationCustomer,IReturner,IBrokerを最適化
- 所有権のIAcquiredFromを最適化
- 取引のIAgentを最適化

## v4.276.0 - 2022-11-10

### Changed

- 販売者のmakesOfferに適用取引期間を追加
- PayActionを最適化
- PayActionにlocationを追加
- ISimpleOrderからprojectを削除
- アクション検索条件拡張
- アクションを最適化

## v4.275.0 - 2022-11-07

### Changed

- プロダクト検索条件拡張

## v4.274.0 - 2022-11-06

### Changed

- 価格仕様を最適化
- Invoiceの対象予約インターフェースを拡張
- ITicketOfferをプロダクトに再定義

## v4.273.1 - 2022-11-01

### Changed

- 複合価格仕様を最適化

## v4.273.0 - 2022-11-01

### Changed

- 興行オファー承認アクションを最適化
- 複合価格仕様を最適化

## v4.272.0 - 2022-10-31

### Changed

- プロジェクトのonPaymentStatusChanged設定を廃止
- Invoiceの対象予約インターフェースを拡張
- 価格仕様を最適化
- IUnitPriceOfferをIOfferから分離

## v4.271.0 - 2022-10-22

### Added

- タスクにdateAbortedを追加

## v4.270.0 - 2022-10-20

### Added

- 販売者にmakesOfferを追加
- 口座取引検索条件を追加

### Changed

- 口座転送アクションを最適化

## v4.269.0 - 2022-10-11

### Changed

- IAMメンバー最適化
- セクション検索条件拡張
- COAイベントインポートタスクを拡張
- プロダクトのserviceOutputを最適化
- プロダクトのoffersを最適化

## v4.268.0 - 2022-09-30

### Changed

- 口座取引の取引番号指定を必須化
- IMonetaryAmount型の属性について最適化
- 口座取引インターフェースを最適化
- プロダクト検索条件拡張
- イベント作成パラメータ最適化
- 施設コンテンツ作成パラメータ最適化
- 施設コンテンツ検索条件拡張
- IPaymentCardを最適化

## v4.267.0 - 2022-09-09

### Changed

- 単価オファーの適用決済カードがArrayでないケースを廃止

## v4.266.0 - 2022-09-08

### Changed

- 単価オファーの適用決済カードがArrayでないケースを廃止

## v4.265.0 - 2022-09-06

### Changed

- 予約のissuedThroughに興行IDを追加

## v4.264.0 - 2022-09-06

### Changed

- イベントのhasOfferCatalogを廃止
- イベントに興行名称を追加

## v4.263.0 - 2022-09-02

### Changed

- イベント検索条件に興行IDを追加
- カタログの興行区分を廃止

## v4.262.0 - 2022-08-30

### Changed

- イベントのIItemOfferedに興行IDを追加

## v4.261.0 - 2022-08-26

### Removed

- 互換性維持対応としてのchevreエクスポートを廃止
- 注文返品アクションのIPotentialActionsからrefundを削除
- PrintActionタイプを廃止

## v4.260.0 - 2022-08-24

### Changed

- 決済アクションのIPotentialActionsにadd2reportを追加
- 返金アクションのIPotentialActionsにadd2reportを追加

## v4.259.0 - 2022-08-22

### Added

- オファーにhasMerchantReturnPolicyを追加

### Changed

- オファー検索条件拡張
- 販売者の返品ポリシーを最適化
- 返品取引の返品ポリシーを最適化
- 返品アクションのpotentialActionsを最適化
- 施設インターフェースを最適化
- 施設コンテンツを最適化
- any属性を定義
- 注文のIReservationを最適化
- 注文のIPermitを最適化
- 注文のorderedItemとしてのプロダクトを最適化
- 所有権のIPermitを最適化
- プロダクトを最適化
- イベントオファー承認アクションを最適化
- サービスファクトリーをプロダクトファクトリーに統合
- プロダクトのIServiceTypeを最適化
- IThing継承について最適化
- 決済サービスのavailableChannelにonPaymentStatusChangedを定義
- イベントのoffersにIOffer4COAを定義
- 経理レポートのIActionを最適化

## v4.258.0 - 2022-08-03

### Changed

- ISellerを最適化
- 販売者のIMerchantReturnPolicyのstrict definition

## v4.257.0 - 2022-08-02

### Changed

- イベントオファー承認アクションのobject.acceptedOfferを最適化

## v4.256.0 - 2022-07-29

### Changed

- 予約取引開始時の複数適用決済カード指定に対応

## v4.255.0 - 2022-07-27

### Changed

- コンテンツ名称を多言語型に統一(予約のコンテンツ名称に関しては互換性維持対応)

## v4.254.0 - 2022-07-25

### Changed

- 施設検索条件拡張

## v4.253.0 - 2022-07-25

### Changed

- 所有権の所有者を最適化

## v4.252.0 - 2022-07-24

### Changed

- 所有権の所有者をArray対応

## v4.251.0 - 2022-07-22

### Changed

- 施設コンテンツのIWorkPerformedを最適化

## v4.250.0 - 2022-07-19

### Changed

- サービス登録確定アクションのオブジェクトを拡張

## v4.249.0 - 2022-07-16

### Changed

- 資産取引検索条件拡張

## v4.248.0 - 2022-07-10

### Changed

- 決済カード加算料金を最適化
- 単価仕様の適用決済カードを複数に対応

## v4.247.0 - 2022-07-06

### Changed

- 注文に名称を定義
- 注文検索条件拡張

## v4.246.0 - 2022-06-30

### Changed

- トークン検証アクションを拡張

### Removed

- ConfirmReservationタスクを廃止
- ConfirmCancelReserveタスクを廃止

## v4.245.0 - 2022-06-26

### Removed

- ConfirmPayタスクを廃止
- ConfirmRefundタスクを廃止

## v4.244.0 - 2022-06-09

### Added

- 資産取引削除タスクを追加

### Changed

- 資産取引の取引番号を必須化

## v4.243.0 - 2022-06-08

### Changed

- 取引削除タスクをReturnOrderとMoneyTransferに拡張

## v4.242.0 - 2022-06-08

### Added

- 決済資産取引返却タスクを追加

### Changed

- 返金取引検索条件拡張
- 返金取引確定時の返金purpose指定を最適化

## v4.241.0 - 2022-06-07

### Added

- 決済資産取引返却タスクを追加

## v4.240.0 - 2022-06-06

### Changed

- 返品取引確定時のrefundMovieTicketパラメータを廃止
- 返品アクションのIPotentialActionsにuseConfirmRefundを追加

## v4.239.0 - 2022-06-05

### Changed

- 予約取消アクションのIObjectを最適化
- イベントオファー承認アクションを最適化
- イベントオファー承認アクションのobject.eventを最適化
- 予約のIBrokerを最適化
- 取引のIProjectを最適化

## v4.238.0 - 2022-06-02

### Changed

- イベントオファー承認アクションのobject.eventを最適化

## v4.237.0 - 2022-06-01

### Changed

- 単価仕様の適用MovieTicketを明確に定義
- 決済カード加算料金の適用MovieTicketを明確に定義

## v4.236.0 - 2022-06-01

### Added

- 予約資産取引返却タスクを追加

### Changed

- 返却アクションを最適化
- Eメール送信アクションのIPurposeを定義
- CheckアクションのIAgentを最適化
- 予約使用アクションを最適化

### Removed

- 印刷アクションを削除

## v4.235.0 - 2022-05-31

### Changed

- 承認アクションのIAgentを最適化
- 承認アクションのIRecipientを最適化

## v4.234.0 - 2022-05-31

### Changed

- 決済アクションのIAgentを最適化
- 返金アクションのIAgentを最適化
- 通貨転送アクションのIAgentを最適化
- 予約のISuperEventを最適化
- 施設コンテンツを最適化

## v4.233.0 - 2022-05-30

### Changed

- 決済資産取引検索条件にaccountIdを追加
- 返金資産取引検索条件にaccountIdを追加

## v4.232.0 - 2022-05-30

### Changed

- アクションのIParticipantを最適化

## v4.231.0 - 2022-05-30

### Changed

- 転送取引のIRecipientを最適化
- 取引のIAgentを最適化

### Removed

- OrganizationType.MovieTheaterを廃止

## v4.230.0 - 2022-05-29

### Changed

- 取引のISellerを最適化
- アクションのIParticipantの名称をStringに統一

## v4.229.0 - 2022-05-27

### Added

- サービス登録資産取引確定タスクを追加

## v4.228.0 - 2022-05-27

### Added

- サービス登録資産取引確定タスクを追加

### Changed

- 資産取引agentを販売者あるいは管理者として最適化

## v4.227.0 - 2022-05-26

### Changed

- 資産取引agentを販売者あるいは管理者として最適化

## v4.226.0 - 2022-05-26

### Changed

- アクションのIParticipantを最適化
- サービス登録アクションのagentをプロジェクトに固定
- 予約アクションのagentをプロジェクトに固定
- 予約取消アクションのagentをプロジェクトに固定

## v4.225.0 - 2022-05-25

### Changed

- update @motionpicture/coa-service
- 取引agentを最適化

## v4.224.0 - 2022-05-25

### Changed

- タスク検索条件拡張

## v4.223.0 - 2022-05-24

### Changed

- COA予約にtotalPrice属性を追加

## v4.222.0 - 2022-05-23

### Added

- 予約資産取引確定タスクを追加

### Changed

- 予約取引確定パラメータを最適化
- 予約取消確定タスクを最適化
- サービス登録確定アクションを最適化

## v4.221.0 - 2022-05-20

### Changed

- 注文の販売者を最適化
- 取引の販売者を最適化
- 注文アイテムとしての予約を最適化
- 注文アイテムとしてのPermitを最適化

## v4.220.0 - 2022-05-19

### Changed

- 決済アクションのrecipientを最適化
- 返金アクションのagentを最適化

## v4.219.0 - 2022-05-19

### Changed

- アクションのIParticipantを最適化
- 承認アクションのIParticipantを最適化

## v4.218.0 - 2022-05-18

### Changed

- 経理レポートに保管するアクションを再定義
- 販売者のtypeOfを固定化
- 注文の販売者を最適化
- 所有権のownedByを最適化
- 所有権のacquiredFromを最適化
- アクションのIParticipantを顧客にも拡張

## v4.217.0 - 2022-05-18

### Changed

- 決済アクションのagentをプロジェクトに変更
- 返金アクションのagentを再定義
- 決済アクションのrecipientを必須化

## v4.216.0 - 2022-05-18

### Changed

- 返金資産取引のagentを再定義
- 転送資産取引のagentを再定
- 返品アクションのagentを拡張

## v4.215.0 - 2022-05-17

### Changed

- ポイント特典付与アクションのagentをプロジェクトに変更
- 返却アクションのagentをプロジェクトに変更

## v4.214.0 - 2022-05-17

### Changed

- メンバーシップ注文タスクを最適化
- 通知アクションのagentをプロジェクトに変更
- Eメール送信アクションのagentをプロジェクトに変更

## v4.213.0 - 2022-05-17

### Added

- 決済資産取引確定タスクを追加

### Changed

- 注文の受け入れオファーを最適化
- 注文の受け入れオファーのpriceSpecificationを複合価格仕様として再定義

## v4.212.0 - 2022-05-16

### Changed

- 通貨転送確定アクションを最適化

### Removed

- 登録解除アクションを削除

## v4.211.0 - 2022-05-15

### Changed

- サービス登録確定アクションを最適化
- 通貨転送確定アクションを最適化
- サービス登録取引確定パラメータを最適化

## v4.210.0 - 2022-05-14

### Changed

- 決済確定アクションを最適化

## v4.209.0 - 2022-05-13

### Changed

- 決済確定アクションを最適化

## v4.208.0 - 2022-05-12

### Changed

- 予約取引を最適化
- 販売者を最適化
- 所有権を最適化
- 予約を最適化

## v4.207.0 - 2022-05-11

### Changed

- 予約検索条件拡張
- 決済サービスに追加特性を追加
- 予約を最適化

## v4.206.0 - 2022-05-10

### Changed

- アクション検索条件拡張
- 決済取引確定時のpurpose指定を必須化

## v4.205.0 - 2022-05-09

### Changed

- Invoiceを再定義

## v4.204.0 - 2022-05-05

### Changed

- PayAction.object.serviceOutputを定義

## v4.203.0 - 2022-05-03

### Changed

- 予約取引objectに適用MovieTicket購入番号を追加

## v4.202.0 - 2022-05-02

### Changed

- 予約取引開始パラメータに適用MovieTicket購入番号を追加

## v4.201.0 - 2022-05-01

### Changed

- 決済アクションを最適化
- 資産取引確定アクションを最適化

## v4.200.0 - 2022-04-27

### Changed

- 資産取引オブジェクトにforce属性を追加

## v4.199.0 - 2022-04-23

### Changed

- 注文の決済方法に、決済サービスによって発行された決済カード情報を追加

## v4.198.0 - 2022-04-22

### Changed

- 注文タスクを最適化
- 注文配送タスクを最適化

## v4.197.0 - 2022-04-20

### Changed

- tslintの"no-default-export": trueに変更
- 注文にorderedItemを追加
- 予約のreservationForからworkPerformedを削除
- 注文アクションのobjectを最適化
- 注文配送アクションのobjectを最適化

## v4.196.0 - 2022-04-12

### Changed

- 決済資産取引に対する決済サービスID指定を必須化

## v4.195.0 - 2022-04-04

### Changed

- イベントのオファーインターフェースを厳密に定義
- 施設コンテンツのオファーインターフェースを厳密に定義

## v4.194.0 - 2022-03-28

### Changed

- @surfrock/sdkで再構築

## v4.193.0 - 2022-03-25

### Changed

- 決済承認オブジェクトに決済サービスIDを追加

## v4.192.0 - 2022-03-24

### Changed

- 通貨転送資産取引のtoLocationを注文口座に対応

## v4.191.0 - 2022-03-23

### Changed

- 通貨転送資産取引のfromLocationをトークンに対応
- 決済資産取引のペイメントカードをトークンに対応
- 通貨転送資産取引のfromLocationを注文口座に対応

## v4.190.0 - 2022-03-17

### Removed

- メンバーシップ登録解除タスクを削除

## v4.189.0 - 2022-03-15

### Changed

- 注文検索条件拡張

## v4.188.0 - 2022-03-08

### Changed

- IReturnableOrderを確認番号と注文番号の組み合わせに変更

## v4.187.0 - 2022-03-03

### Removed

- AggregateOnProjectタスクを削除

## v4.186.0 - 2022-03-01

### Changed

- 注文検索条件拡張

## v4.185.0 - 2022-02-16

### Changed

- 返品取引の予約取消アクションパラメータを廃止
- 返品アクションのobjectにdateReturnedを追加

## v4.184.0 - 2022-02-16

### Changed

- 予約使用アクションにlocationを定義

## v4.183.0 - 2022-01-28

### Added

- 承認削除タスクを追加

### Changed

- 返品ポリシーを拡張
- プロジェクトの返品手数料設定を廃止
- プロジェクトの顧客ユーザープール設定を廃止
- 注文取引確定パラメータを最適化

## v4.182.0 - 2022-01-12

### Added

- 注文削除タスクを追加
- 取引削除タスクを追加

### Changed

- 返金後注文通知を廃止
- 取引のonOrderStatusChanged属性を廃止
- 注文ステータス変更後の注文通知アクションを廃止

## v4.181.0 - 2021-12-27

### Changed

- 決済取引のIPendingTransactionに出金元の口座番号情報を追加
- プロダクトにavailableChannelを追加
- サービス登録アクションのIObjectを定義
- 予約取引の適用メンバーシップ指定に発行サービスIDを必須化
- 予約取引のポイント特典入金先指定に発行サービスIDを必須化
- サービス登録取引のポイント特典入金先指定に発行サービスIDを必須化
- 通貨転送アクションのペイメントカードインターフェースに発行サービスIDを必須化
- 決済取引オブジェクトに決済サービスIDを追加
- 旧売上レポートを削除
- 予約通知を廃止

## v4.180.0 - 2021-12-13

### Changed

- 座席検索条件拡張

## v4.179.0 - 2021-12-12

### Changed

- イベントのカタログ情報にカタログコードを追加

## v4.178.0 - 2021-12-06

### Changed

- 所有権検索条件拡張

## v4.177.0 - 2021-11-17

### Changed

- 出金取引開始パラメータにforceを追加
- ポイント付与対象インターフェース入金識別子を追加
- 資産取引検索条件拡張

## v4.176.0 - 2021-11-02

### Changed

- 予約取引にポイント特典情報を保管
- 予約取引開始パラメータを最適化
- サービス登録取引開始パラメータを最適化

## v4.175.0 - 2021-10-20

### Changed

- イベント予約のsubReservationを定義
- オファーのvalidRateLimitを定義

## v4.174.0 - 2021-10-19

### Changed

- 予約取引のobject.reservationsをobject.subReservationへ統合
- 予約取引のobject.eventをobject.reservationForへ統合
- 予約のreservationForを最適化
- 予約取引のobject.subReservationからreservationForを削除

## v4.173.0 - 2021-10-11

### Changed

- IQuantitativeValueをInfinityに対応

## v4.172.0 - 2021-10-06

### Changed

- 決済アクションにinstrumentを追加

## v4.171.0 - 2021-10-06

### Changed

- 経理レポート検索条件拡張

## v4.170.0 - 2021-09-26

### Added

- イベント入場集計タスクを追加

## v4.169.0 - 2021-09-14

### Changed

- セクションに座席数を追加
- Eメールメッセージにプロジェクトを追加

## v4.168.0 - 2021-09-13

### Changed

- 検索条件を補強

## v4.167.0 - 2021-09-13

### Added

- 注文返品後アクションに入金返却アクションを追加

### Changed

- 予約承認アクションのpendingTransactionを最適化
- 通貨承認アクションのpendingTransactionを最適化
- 決済承認アクションのpendingTransactionを最適化
- 入金注文アイテムをMoneyTransferに拡張
- 口座タイプをaccountTypeに定義

## v4.166.0 - 2021-09-06

### Changed

- 決済サービスのIProviderCredentialsにpaymentUrlExpiresInSecondsを追加

## v4.165.0 - 2021-09-05

### Changed

- 通貨オファー承認アクションを拡張
- 通貨転送取引のIPendingTransactionを通貨転送資産取引に統一

## v4.164.1 - 2021-09-02

### Fixed

- プロダクトオファー承認アクションを修正

## v4.164.0 - 2021-09-02

### Changed

- 口座のtypeOfをAccountで固定
- PermitのtypeOfをPermitで固定

## v4.163.1 - 2021-08-31

### Changed

- 通貨転送取引のIPendingTransactionを拡張

## v4.163.0 - 2021-08-31

### Changed

- オファーのポイント特典のtypeOfをMoneyTransferに固定
- MoneyTransferアクションのIPendingTransactionを拡張

## v4.162.0 - 2021-08-25

### Changed

- ペイメントカード所有権からtypeOfGood.accountNumberを削除
- ペイメントカード所有権からtypeOfGood.accountTypeを削除

## v4.161.0 - 2021-08-24

### Changed

- ポイント付与アクションを最適化

## v4.160.0 - 2021-08-23

### Changed

- 注文アイテムとしてのPermitからaccountNumberを削除
- 決済承認アクションを最適化

## v4.159.0 - 2021-08-23

### Changed

- 所有権検索条件からtypeOfGood.accountNumberを削除
- 所有権検索条件からtypeOfGood.accountTypeを削除

## v4.158.0 - 2021-08-22

### Changed

- 所有権を最適化(typeOfGoodをIReservation or IPermitに統一)

## v4.157.0 - 2021-08-22

### Added

- IPermitにpaymentAccountを追加

## v4.156.0 - 2021-08-20

### Changed

- IPermitにdateIssuedを追加
- 注文と所有権のIServiceOutputを拡張(accountNumber,accountType)

## v4.155.0 - 2021-08-19

### Changed

- IProgramMembershipを最適化

## v4.154.0 - 2021-08-19

### Changed

- メンバーシップ登録解除アクションのオブジェクトを所有権に拡張

## v4.153.0 - 2021-08-18

### Changed

- IProgramMembershipの汎用性拡張

## v4.152.0 - 2021-08-18

### Added

- GatewayTimeoutErrorを追加

## v4.151.0 - 2021-08-18

### Changed

- サービスアウトプット検索条件拡張

## v4.150.0 - 2021-08-13

### Added

- EメールメッセージのAboutIdentifierを追加

## v4.149.0 - 2021-08-10

### Changed

- Eメールメッセージを拡張

## v4.148.0 - 2021-08-05

### Removed

- 決済方法タイプを削除

## v4.147.0 - 2021-08-04

### Changed

- 注文の決済方法にissuedThroughを追加

## v4.146.0 - 2021-08-04

### Changed

- ペイメントサービスインターフェースを拡張

## v4.145.0 - 2021-07-27

### Changed

- 予約検索条件拡張
- 注文検索条件拡張

## v4.144.0 - 2021-07-26

### Changed

- 注文取引objectに決済URLによる決済情報を追加

## v4.143.0 - 2021-07-20

### Changed

- 注文カスタマーインターフェースを顧客組織にも拡張

## v4.142.0 - 2021-07-19

### Changed

- 取引のIAgentをウェブアプリケーションにも拡張

## v4.141.0 - 2021-07-19

### Changed

- 取引のIAgentをウェブアプリケーションにも拡張

## v4.140.0 - 2021-07-19

### Changed

- 所有権の所有者インターフェースをウェブアプリケーションにも拡張

## v4.139.0 - 2021-07-18

### Changed

- 予約開始時の受け入れられたオファーインターフェースを拡張
- 注文カスタマーインターフェースをウェブアプリケーションにも拡張

## v4.138.0 - 2021-07-13

### Changed

- 販売者の決済サービス資格情報にpaymentUrlを追加

## v4.137.0 - 2021-07-13

### Changed

- 決済サービスにserviceTypeを追加

## v4.136.0 - 2021-07-12

### Changed

- プロダクト検索条件拡張
- サービスアウトプット検索条件拡張

## v4.135.0 - 2021-07-11

### Changed

- 予約のprogramMembershipUsed型をPermitに変更

## v4.134.0 - 2021-07-08

### Changed

- プロダクトのserviceTypeを定義

## v4.133.0 - 2021-07-07

### Changed

- 予約のissuedThrougのを拡張

## v4.132.0 - 2021-07-05

### Changed

- 予約にissuedThroughを追加

## v4.131.0 - 2021-07-05

### Added

- IAMロール検索条件を追加

### Changed

- 予約の適用メンバーシップをトークン化されたメンバーシップに対応

## v4.130.0 - 2021-07-04

### Added

- プロジェクトメンバー検索条件を追加

## v4.129.0 - 2021-07-04

### Added

- プロジェクトメンバーインターフェースを追加

## v4.128.0 - 2021-07-03

### Changed

- オファーカタログ検索条件拡張

## v4.127.0 - 2021-06-28

### Changed

- 予約の単価オファーを最適化

## v4.126.0 - 2021-06-24

### Changed

- プロダクト検索条件拡張

## v4.125.0 - 2021-06-23

### Changed

- 全リソースのプロジェクトID検索条件を統一

## v4.124.0 - 2021-06-23

### Changed

- 全リソース検索条件にproject.id.$eqを追加

## v4.123.0 - 2021-06-23

### Changed

- 顧客コードをidentifier->branchCodeと変更

## v4.122.1 - 2021-06-21

### Changed

- 経理レポートインターフェースを調整

## v4.122.0 - 2021-06-21

### Added

- 経理レポートインターフェースを定義

## v4.121.0 - 2021-06-21

### Changed

- 区分からAccountTypeを削除

## v4.120.0 - 2021-06-20

### Changed

- プロダクト検索条件拡張
- オファー検索条件拡張

## v4.119.0 - 2021-06-19

### Added

- 区分にCurrencyTypeを追加

## v4.118.0 - 2021-06-14

### Changed

- 単価オファーの提供アイテムを最適化

## v4.117.0 - 2021-06-13

### Changed

- サービスアウトプット検索条件拡張

## v4.116.0 - 2021-06-12

### Changed

- オファー検索条件拡張

## v4.115.0 - 2021-06-11

### Changed

- プロダクト検索条件拡張

## v4.114.0 - 2021-06-10

### Changed

- オファー検索条件拡張

## v4.113.0 - 2021-06-09

### Changed

- 予約取引開始パラメータを最適化

## v4.112.0 - 2021-06-08

### Added

- 区分分類にメンバーシップタイプを追加

### Changed

- オファーに有効なメンバーシップタイプを追加

## v4.111.0 - 2021-06-07

### Changed

- 予約の使用メンバーシップを定義

## v4.110.0 - 2021-06-04

### Changed

- 受け入れられたオファーのアイテムインターフェースを定義

## v4.109.0 - 2021-06-02

### Changed

- ポイント特典付与インターフェースを定義
- 単価オファーの提供アイテムインターフェースを定義

## v4.108.0 - 2021-06-01

### Changed

- 口座取引の金額の型をIMonetaryAmountに統一

## v4.107.0 - 2021-06-01

### Changed

- 通貨転送アクションの金額の型をIMonetaryAmountに統一
- 決済方法タイプを最適化

## v4.106.0 - 2021-05-31

### Changed

- 取引の金額型を拡張

## v4.105.0 - 2021-05-31

### Changed

- 通貨転送取引を口座取引に依存するように変更

## v4.104.0 - 2021-05-27

### Added

- 顧客インターフェースを追加

## v4.103.0 - 2021-05-24

### Changed

- 注文検索条件拡張

## v4.102.0 - 2021-05-16

### Added

- 口座インターフェースを追加
- 口座ステータスを追加
- 口座転送タスクを追加
- 口座転送中止タスクを追加

### Changed

- @pecorino/factoryへの依存を排除

## v4.101.0 - 2021-05-13

### Changed

- CreativeWorkの汎用性拡張

## v4.100.0 - 2021-05-08

### Added

- cinerinoからcognito,pecorino,waiterを移行

## v4.99.0 - 2021-05-08

### Added

- cinerinoからタスクを移行

## v4.98.0 - 2021-05-06

### Added

- cinerinoからアクションを移行
- cinerinoから取引を移行

### Changed

- アクションのIParticipantを拡張

## v4.97.0 - 2021-05-05

### Added

- cinerinoから取引タイプを移行

### Changed

- アクション検索条件拡張

## v4.96.0 - 2021-05-03

### Changed

- 資産取引のネームスペースを変更

## v4.95.0 - 2021-04-29

### Added

- ウェブアプリケーションインターフェースを追加

## v4.94.0 - 2021-04-27

### Changed

- プロジェクト設定を拡張(cinerino設定を移行)

## v4.93.0 - 2021-04-22

### Changed

- 所有権検索条件拡張

## v4.92.0 - 2021-04-16

### Changed

- アクションタイプを拡張
- オファーインターフェースを拡張
- Thingインターフェースをエクスポート

## v4.91.0 - 2021-04-15

### Added

- 承認インターフェースを追加
- 所有権インターフェースを追加

## v4.90.0 - 2021-04-14

### Added

- 売上レポートインターフェースを追加

## v4.89.0 - 2021-04-12

### Added

- インボイスインターフェースを追加

### Changed

- オファーにofferedThrough属性を追加

## v4.88.0 - 2021-04-11

### Added

- 注文インターフェースを追加
- 人物インターフェースを追加
- 決済ステータスインタフェースを追加

## v4.87.0 - 2021-04-09

### Changed

- プロジェクトのイベント変更時設定を廃止

## v4.86.0 - 2021-04-04

### Changed

- 予約検索条件拡張

## v4.85.0 - 2021-03-31

### Changed

- 予約取消取引開始パラメータからtransactionを削除
- 予約取消取引開始パラメータを複数予約IDに対応

## v4.84.0 - 2021-03-28

### Changed

- ルームインターフェースを拡張

## v4.83.0 - 2021-03-18

### Changed

- プロジェクトに予約使用時設定を追加

## v4.82.0 - 2021-03-16

### Changed

- 映画作品名称を多言語対応

## v4.81.0 - 2021-03-08

### Added

- プロジェクトに決済ステータス変更時設定を追加
- 決済と返金後の通知アクションを追加

## v4.80.0 - 2021-03-07

### Added

- 予約にbrokerを追加

## v4.79.0 - 2021-03-02

### Added

- ペイメントサービスのプロバイダー認証情報にトークン認証コードを追加

## v4.78.1 - 2021-03-01

### Added

- 予約使用アクションを追加
- 決済サービスタイプにFaceToFaceを追加

## v4.77.0 - 2021-01-27

### Changed

- イベント検索条件拡張

## v4.76.0 - 2021-01-12

### Changed

- 予約検索条件拡張

## v4.75.0 - 2021-01-12

### Changed

- アクション検索条件拡張
- オファーカタログ検索条件拡張
- 予約検索条件拡張

## v4.74.0 - 2021-01-10

### Added

- 予約にdateUsedを追加

## v4.73.0 - 2020-12-28

- アクション検索条件拡張
- イベントに入場ゲート集計属性を追加

## v4.72.0 - 2020-12-16

### Added

- encodingFormatを追加
- SendEmailMessageタスクを追加

## v4.71.1 - 2020-12-13

### Changed

- イベントのオファー集計インターフェースを拡張

## v4.71.0 - 2020-12-08

### Changed

- update @pecorino/factory
- ポイント特典インターフェースを拡張

## v4.70.1 - 2020-12-08

### Changed

- update @pecorino/factory

## v4.70.0 - 2020-12-01

### Changed

- 外部決済サービス認証情報を販売者から決済サービスへ移行

## v4.69.0 - 2020-12-01

### Added

- ペイメントサービスにproviderを追加

## v4.68.0 - 2020-11-24

### Changed

- オファー検索条件拡張

## v4.67.0 - 2020-11-24

### Added

- ルームに検索条件を定義
- ルームセクションに検索条件を定義
- 座席に名称を追加

## v4.66.0 - 2020-11-24

### Changed

- カテゴリーコード検索条件拡張

## v4.65.0 - 2020-11-21

### Changed

- オファー検索条件拡張

## v4.64.0 - 2020-11-20

### Changed

- カテゴリーコード検索条件拡張
- イベントシリーズ検索条件拡張

## v4.63.0 - 2020-11-20

### Changed

- 作品検索条件拡張
- 座席検索条件拡張
- オファーカタログ検索条件拡張

## v4.62.1 - 2020-11-18

### Changed

- 組織インターフェースを調整

## v4.62.0 - 2020-11-18

### Added

- 返品ポリシーを追加

### Changed

- プロジェクトインターフェースを拡張

## v4.61.0 - 2020-11-18

### Removed

- 決済方法タイプからAccountを削除

## v4.60.0 - 2020-11-16

### Changed

- AccountプロダクトタイプをPaymentCardに統合

## v4.59.2 - 2020-11-13

### Changed

- 決済取引のagentを定義

## v4.59.1 - 2020-11-11

### Changed

- @pecorino/factory

## v4.59.0 - 2020-11-11

### Changed

- 決済アクションのpurposeを定義

## v4.58.1 - 2020-11-04

### Changed

- update @motionpicture/coa-service
- update @motionpicture/gmo-service
- update @pecorino/factory

## v4.58.0 - 2020-11-01

### Changed

- プロジェクトにsubscriptionを追加
- ペイメントサービスインターフェースをプロダクトとして拡張

## v4.57.0 - 2020-10-29

### Changed

- プロダクト検索条件拡張

## v4.56.0 - 2020-10-12

### Changed

- 販売者にbranchCodeを追加

## v4.55.1 - 2020-10-11

### Changed

- 販売者検索条件調整

## v4.55.0 - 2020-10-10

### Changed

- 販売者検索条件拡張

## v4.54.0 - 2020-10-09

### Changed

- 施設検索条件拡張

## v4.53.0 - 2020-09-28

### Changed

- 決済取引インターフェースを調整

## v4.52.0 - 2020-09-28

### Added

- カテゴリーコード分類にPaymentMethodTypeを追加
- ペイメントサービスタイプにAccountを追加

## v4.51.0 - 2020-09-24

### Changed

- update @motionpicture/coa-service
- update @pecorino/factory

## v4.50.0 - 2020-09-18

### Changed

- @motionpicture/gmo-serviceを呼び出さないように調整

## v4.49.0 - 2020-09-16

### Changed

- 決済に関連するGMOの型をエクスポート

## v4.48.0 - 2020-09-15

### Changed

- MoneyTransfer取引のオブジェクトを定義
- update @pecorino/factory

## v4.47.0 - 2020-09-13

### Added

- サービスアウトプット検索条件追加

### Changed

- プロダクト検索条件拡張

## v4.46.0 - 2020-09-10

### Changed

- 著作物インターフェースを拡張

## v4.45.0 - 2020-09-10

### Added

- プロダクトタイプを追加

## v4.44.0 - 2020-09-09

### Changed

- 決済方法認証アクションの汎用性拡張

## v4.43.0 - 2020-09-08

### Changed

- 静的な決済方法タイプへの依存を削除

## v4.42.0 - 2020-09-06

### Added

- オファーにunacceptedPaymentMethodを追加

## v4.41.0 - 2020-09-03

### Added

- 決済カード区分に対応決済方法を追加
- ムビチケ券種区分チャージ仕様に対応決済方法を追加

## v4.40.0 - 2020-09-03

### Changed

- 販売者インターフェースを最適化

## v4.39.0 - 2020-09-02

### Changed

- アクション検索条件拡張

## v4.38.0 - 2020-09-01

### Added

- アクション検索条件インターフェースを追加

## v4.37.0 - 2020-08-28

### Changed

- 決済取引の汎用性拡張
- 返金取引の汎用性拡張
- 決済アクションの汎用性拡張
- 返金アクションの汎用性拡張

## v4.36.0 - 2020-08-28

### Changed

- 販売者の対応決済方法インターフェースの汎用性拡張

## v4.35.0 - 2020-08-25

### Added

- 返金タスクを追加
- 返金アクションを追加
- 返金取引を追加

## v4.34.0 - 2020-07-26

### Added

- 劇場インターフェースにhasEntranceGateを追加

## v4.33.0 - 2020-07-20

### Added

- 決済取引の確定パラメータを定義

### Removed

- メンバーシップ登録取引を削除

## v4.32.0 - 2020-07-19

### Added

- ペイメントサービスに外部サービス認証情報属性を追加

## v4.31.0 - 2020-07-19

### Added

- 決済中止タスクインターフェースを追加

### Changed

- 決済サービスにCreditCardを追加

## v4.30.0 - 2020-07-16

### Added

- 決済タスクインターフェースを追加

## v4.29.1 - 2020-07-15

### Changed

- 販売者インターフェースの汎用性拡張

## v4.29.0 - 2020-07-13

### Added

- 決済取引インターフェースを追加
- 販売者インターフェースを追加

## v4.28.0 - 2020-07-09

### Added

- プロジェクトにペイメントサービス設定を追加

### Changed

- MGTicketインターフェースをMovieTicketインターフェースに統合

## v4.27.0 - 2020-07-08

### Changed

- オファーと価格仕様のappliesToMovieTicketTypeをappliesToMovieTicketに変更

## v4.26.0 - 2020-06-30

### Added

- プロダクトインターフェースを追加

## v4.25.0 - 2020-06-15

### Added

- サービスのポイント特典をエクスポート

## v4.24.0 - 2020-06-15

### Changed

- MoneyTransferアクションの汎用性拡張

## v4.23.0 - 2020-06-15

### Added

- サービス登録後アクションにMoneyTransferを追加

## v4.22.0 - 2020-06-11

### Changed

- サービス登録取引を取引番号で確定できるように調整

## v4.21.0 - 2020-06-10

### Added

- Permitインターフェースを追加

### Changed

- サービス登録取引を拡張

## v4.20.0 - 2020-05-28

### Changed

- 取引検索条件拡張

## v4.19.0 - 2020-05-28

### Added

- 予約番号での予約取消を追加

## v4.18.0 - 2020-05-24

### Added

- 劇場に親組織を追加

## v4.17.0 - 2020-05-22

### Changed

- イベントのカタログ検索条件を調整

## v4.16.0 - 2020-05-22

### Added

- プロジェクト上集計タスクを追加
- イベントキャパシティインポートタスクを追加

## v4.15.0 - 2020-05-21

### Changed

- 予約取引を取引番号で確定できるように調整

## v4.14.0 - 2020-05-19

### Added

- 決済取引を追加

## v4.13.0 - 2020-05-15

### Changed

- 通貨転送取引開始パラメータ調整

## v4.12.0 - 2020-05-14

### Added

- イベントにhasOfferCatalogを追加

## v4.11.0 - 2020-05-13

### Added

- 取引に取引番号を追加

## v4.10.0 - 2020-05-13

### Changed

- update @pecorino/factory

## v4.9.0 - 2020-05-10

### Added

- サービス登録取引を追加
- 決済方法インターフェースを追加
- 通貨転送取引を追加
- 決済カードインターフェースを追加

## v4.8.0 - 2020-05-01

### Added

- 決済方法にMGTicketを追加
- 決済方法にPrepaidCardを追加

## v4.7.0 - 2020-04-29

### Changed

- 定量値インターフェースを拡張

## v4.6.0 - 2020-04-27

### Added

- サービスインターフェースを追加

## v4.5.0 - 2020-04-24

### Added

- プロジェクトにイベントインポート期間設定を追加

## v4.4.0 - 2020-04-11

### Added

- 劇場にPOS属性を追加

## v4.3.0 - 2020-04-03

### Added

- オファーに販売者属性を追加

## v4.2.0 - 2020-04-02

### Changed

- オファーに供給者属性を追加

## v4.1.0 - 2020-04-01

### Added

- イベントに固有のキャパシティ設定を追加

## v4.0.0 - 2020-03-26

### Changed

- 券種検索条件をオファー検索条件に統合
- 券種インターフェースを単価オファーインターフェースとして再定義
- 予約検索条件拡張

### Removed

- 上映方式区分を削除
- 旧科目を削除
- 旧配給を削除

## v3.1.0 - 2020-03-09

### Changed

- オファー検索条件拡張

## v3.0.1 - 2020-03-08

### Changed

- 作品インターフェース汎用性拡張

## v3.0.0 - 2020-03-04

### Added

- メンバーシップインターフェースを追加
- メンバーシップ登録アクションインターフェースを追加
- メンバーシップ登録解除アクションインターフェースを追加
- メンバーシップ登録取引インターフェースを追加
- カテゴリーコードインターフェースを追加
- カテゴリーコードチャージ仕様インターフェースを追加
- オファーカテゴリータイプを追加
- イベントに集計属性を追加
- オファーカタログインターフェースを追加

### Changed

- サービスタイプをカテゴリーコードに統合
- 配給区分をカテゴリーコードに統合
- 座席に対するオファーインターフェースを拡張
- 予約の価格仕様インターフェースを拡張
- 単価仕様に適用アドオンを拡張
- オファー適用条件拡張
- イベントのacceptedOfferを拡張
- 予約インターフェースにsubReservationを追加
- オファーに適用サブ予約条件を追加
- オファーにレート制限を追加
- 自由席許可属性を場所インターフェースに追加

## v2.5.0 - 2020-01-26

### Changed

- 作品検索条件拡張
- 券種検索条件拡張
- 券種グループ検索条件拡張
- 勘定科目検索条件拡張

## v2.4.1 - 2019-11-26

### Changed

- update typescript

## v2.4.0 - 2019-11-19

### Added

- 予約検索条件を拡張

## v2.3.0 - 2019-10-27

### Added

- 予約取消取引に予約ステータス変更時イベントを追加

## v2.2.0 - 2019-10-27

### Added

- プロジェクト設定インターフェースを追加

## v2.1.0 - 2019-10-24

### Added

- 予約取引に予約ステータス変更時イベントを追加

## v2.0.0 - 2019-09-20

### Added

- 予約パッケージインターフェースを追加

### Changed

- 予約取引の予約番号発行プロセスと仮予約プロセスを分離
- 予約インターフェースの汎用性拡張

## v1.1.0 - 2019-09-03

### Added

- 予約確定アクションのポストアクションに予約通知アクションを追加
- 予約取消アクションのポストアクションに予約通知アクションを追加
- ウェブフックタスクを追加

## v1.0.0 - 2019-07-28

### Added

- Release

Initial release

