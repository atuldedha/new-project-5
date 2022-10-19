import React, { useState } from 'react'
import Calendar from 'react-calendar';
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
  return (
    <div className='NotiSec'>
      <Calendar onChange={onChange} value={value} />
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
