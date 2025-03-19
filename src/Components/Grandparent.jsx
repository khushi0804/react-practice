import React from 'react'
import Parent from './Parent'

function Grandparent() {
  const familyName = "Gupta"
  return (
    <div>
      <h1>👴 Grandparent's Family Name: {familyName}</h1>
      <Parent familyName={familyName} />
    </div>
  )
}

export default Grandparent