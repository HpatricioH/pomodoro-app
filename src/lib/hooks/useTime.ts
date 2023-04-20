import React from 'react'
import TimeContext from '../context/TimeContext'

export default function useTime () {
  return React.useContext(TimeContext)
}
