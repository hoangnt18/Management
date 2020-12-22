import React, { Component } from 'react'
import {Inject,ScheduleComponent, Day, Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule'



export default class EventCalendar extends Component {
    render() {
        return (
            <div>
              <ScheduleComponent currentView="Month" selectedDate={new Date(2020,0,11)}>
                <Inject services={[Day,Week,WorkWeek,Month,Agenda]} />
              </ScheduleComponent>
            </div>
        )
    }


}
