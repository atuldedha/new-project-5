import React, { createRef, useState } from 'react'
import Calendar from 'react-calendar';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

export default function DateNoti() {
  const [value, onChange] = useState(new Date());

  const notiData =[{
    notificationData: "A connect with Minhas Asif",
    date:" Oct,26,2022| 04:00PM",
    status: "done",
  },
  {
    notificationData: "A connect with Ivan",
    date:" Oct,26,2022| 04:00PM",
    status: "pending",
  },
  {
    notificationData: "A connect with Ivan",
    date:" Oct,26,2022| 04:00PM",
    status: "pending",
  },
  {
    notificationData: "A connect with Ivan",
    date:" Oct,26,2022| 04:00PM",
    status: "pending",
  }]


  const handleSelectedDates = info => {
    const title = prompt("What's the name of the title");
    console.log(info);
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr
      };
      const data = [...state.events, newEvent];
      // { events: data }
      setState(data);
      console.log("here", data);
      console.log("here", state);
    } else {
      console.log("nothing");
    }
  };

  const [event, setEvents] = useState([
    { title: 'event 1', date: '2022-10-10' },
    { title: 'event 2', date: '2022-10-12' }
    ]
  );

  function handleSelectedDatesEvent(info){
    const title = prompt("What's the name of the title");
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr
      };

      setEvents(prevEvent =>  [
          ...prevEvent,
          newEvent
        ]
  
      )
      console.log("here", event);
    } else {
      console.log("nothing");
    }
  }

  return (
    <div className='NotiSec'>
      <div>
      <FullCalendar
        plugins={[
            dayGridPlugin,
            interactionPlugin,
        ]}
        initialView="dayGridMonth"
        selectable={true}
        events={event}
        select={handleSelectedDatesEvent}
      />
      </div>
      <h2>Notifications</h2>
      {notiData.map((nData, index) => {
        return (
        <div className='NotiCard' key={index}>
        <span><span className={nData.status}></span><span className='notihEAD'>{nData.notificationData}</span></span>
        <span className='notiDate'>{nData.date}</span>
        </div>
        )
      })
        }
    </div>
  )
}
