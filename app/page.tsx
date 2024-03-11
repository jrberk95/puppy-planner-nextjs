'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Activity from './components/Activity'

export default function Home() {

  const [activities, setActivities] = useState([
    {
      id: 1,
      name: 'Walk',
      time: '10:00am',
      duration: '30 minutes'
    },
    {
      id: 2,
      name: 'Play',
      time: '11:00am',
      duration: '15 minutes'
    },
    {
      id: 3,
      name: 'Eat',
      time: '12:00pm',
      duration: '20 minutes'
    }
  ])

  let activityComponents = activities.map(activity => {
    return <Activity key={activity.id} {...activity} />
  })

  return (
        <main>
          <h1>Welcome to Puppy Planner</h1>
          <button className="activity-button">Add an Activity</button>
          <button className="activity-button">Add a Bathroom Break</button> 
          <div className="activity-list">
          <h2>Today:</h2>
            {activityComponents}
          </div>
        </main>
  )
}
