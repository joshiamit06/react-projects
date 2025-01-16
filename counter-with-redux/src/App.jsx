import { useState } from 'react'
import OuterCard from './components/OuterCard'
import Heading from './components/Heading'
import Buttons from './components/Buttons'
import Toggle from './components/Toggle'

function App() {

  return (
    <center>
      <OuterCard>
        <Heading></Heading>
        <Buttons></Buttons>
        <Toggle></Toggle>
      </OuterCard>
    </center>
  )
}

export default App
