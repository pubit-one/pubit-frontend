const iso8601ToDate = (iso8601, ignoreTimezone = false) => {
    const dateTimeParts = iso8601.match(
        /(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:([+-])(\d{2}):(\d{2}))?)?/
    )

    const date = new Date(
        dateTimeParts[1], // year
        dateTimeParts[2] - 1, // month (0-indexed)
        dateTimeParts[3] || 1, // day
        dateTimeParts[4] || 0, // hours
        dateTimeParts[5] || 0, // minutes
        dateTimeParts[6] || 0, // seconds
        dateTimeParts[7] || 0 // milliseconds
    )

    const sign = dateTimeParts[8]
    if (sign && !ignoreTimezone) {
        const direction = sign === '+' ? 1 : -1
        const hoursOffset = dateTimeParts[9] || 0
        const minutesOffset = dateTimeParts[10] || 0
        const offset = direction * (hoursOffset * 60 + minutesOffset * 1)
        date.setMinutes(date.getMinutes() - offset - date.getTimezoneOffset())
    }

    return date
}
export { iso8601ToDate }
