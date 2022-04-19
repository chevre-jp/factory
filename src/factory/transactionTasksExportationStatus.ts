/**
 * 取引タスクエクスポートステータス
 */
export enum TransactionTasksExportationStatus {
    /**
     * 未エクスポート
     */
    Unexported = 'Unexported',
    /**
     * エクスポート中
     */
    Exporting = 'Exporting',
    /**
     * エクスポート済
     */
    Exported = 'Exported'
}
