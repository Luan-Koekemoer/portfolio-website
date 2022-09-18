
import React from 'react'
import { Deg1, Tensor, UdemyHack} from './learnmore/certs'

export default function LearnMoreCert(props) {
  return (
    <React.Fragment>
      <Deg1  bg={'bg.primary'}/>
      <Tensor  bg={'bg.light'}/>
      <UdemyHack  bg={'bg.dark'}/>
    </React.Fragment>
  )
}
