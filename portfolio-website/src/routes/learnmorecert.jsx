import React from 'react'
import { Deg1, Deg2, Tensor, UdemyHack } from './learnmore/certs'

export default function LearnMoreCert(props) {
  return (
    <React.Fragment>
      <Deg1 bg={'bg.primary'} />
      <Deg2 bg={'bg.light'} />
      <Tensor bg={'bg.dark'} />
      <UdemyHack bg={'bg.primary'} />
    </React.Fragment>
  )
}
