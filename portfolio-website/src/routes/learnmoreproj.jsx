import React from 'react'
import { VPN , Web} from './learnmore/proj.jsx'

export default function LearnMore(props) {
  return (
    <React.Fragment>
      <VPN  bg={'bg.primary'}/>
      <Web  bg={'bg.light'}/>
    </React.Fragment>
  )
}
