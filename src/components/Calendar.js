import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

function Calendar() {

    // Setup the localizer by providing the moment (or globalize) Object
    // to the correct localizer.
    const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

    const MyCalendar = props => (
        <div>
            <BigCalendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
            />
        </div>)

    return (
        <div className="App">
            <h1>Calendar</h1>
            <MyCalendar />
        </div>
    )
}

export default Calendar;