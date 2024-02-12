import React from 'react'
import Nav from './Nav/Nav'
import { action, comedy, originals } from './url'
import Banner from './Banner/Banner'
import Row from './Row/Row'

function NetflixShow() {
  return (
    <div>
       <Nav/>
      <Banner/>
      <Row url={originals} title='Netflix Originals' />
      <Row url={comedy} title='Comedy'/>
      <Row url={action} title='Action' isSmall/>
      
    </div>
  )
}

export default NetflixShow
