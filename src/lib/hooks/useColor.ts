import React from 'react'
import ColorContext from '../context/ColorContext'

export default function useColor () {
  return React.useContext(ColorContext)
}
