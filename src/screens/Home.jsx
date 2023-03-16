import React from 'react'
import { Card } from '../components/Card'
import { Footbar } from '../components/Footbar'
import { NavBar } from '../components/NavBar'
import { Carousal } from '../components/Carousal'

export const Home = () => {
  return (
    <>
    <div><NavBar/></div>
    <div><Carousal/></div>
    <div className='m-3'>
      {
        Array(4).fill(true).map((e,i)=><Card key={i}/>)
      }
    </div>
    <div><Footbar/></div>
    </>
  )
}
