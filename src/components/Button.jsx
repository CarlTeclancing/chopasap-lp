import React from 'react'
import { useState } from 'react'

export default function Button() {
    const [btnValue, setbtnValue] = useState("Button Value");
  return (
    <button>{btnValue}</button>
  )
}
