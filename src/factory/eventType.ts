/**
 * イベントタイプ
 */
enum EventType {
    /**
     * @deprecated Use ScreeningEvent
     */
    IndividualScreeningEvent = 'IndividualScreeningEvent',
    ScreeningEvent = 'ScreeningEvent',
    ScreeningEventSeries = 'ScreeningEventSeries'
}

export default EventType;
