import StickyNote from './components/StickyNote'
import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import './App.scss'

export default function App () {

    const [trigger, setTrigger] = useState(false)
    const handleClick = () => {
      setTrigger(true)
    }
``
  return (
    <div className="main-container">
        {!trigger ?
          <>
            <h1 style={{ textAlign: "center"}}>Pensieve AI Notes</h1>
            <Button className="add-btn" onClick={() => handleClick()} color="primary">+ Please Add notes here</Button>
          </>
          : 
          <div className="memo">
            <StickyNote colors={["#90b7f0"]} />
            <StickyNote colors={["#89e6ae"]} />
            <StickyNote colors={["#f59392"]} />
            <StickyNote colors={["#f0c890"]} />
          </div>
        }
    </div>
  )
}