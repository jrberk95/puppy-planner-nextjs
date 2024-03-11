import React from 'react'

interface ActivityProps {
  name: string;
  time: string;
  duration: string;
  id: number;
}

const Activity = (activity: ActivityProps) => {

  const { name, time, duration } = activity

  return (
    <div className='activity'>
      <h4>{name}</h4>
      <p>{time}</p>
      <p>{duration}</p>
    </div>
  )
}

export default Activity



