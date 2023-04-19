import React from 'react'
import FontContext from '../context/FontContext'

export default function useFont () {
  return React.useContext(FontContext)
}
