import '../../public/styles/styles.css'

import { useState } from 'react'
import React from 'react';
import Tleft from './Left';
import Tright from './right';
import Center from './mainTwitter/centralTwit';
function TwitCln (){


  return(
  <div className='grid'>


    <Tleft />
    <Center/>
<Tright/>
  </div>
  
  
  
        
  
  )
}



export default TwitCln;