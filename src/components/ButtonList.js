import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex overflow-x'> 
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Live"/>
        <Button name="Music"/>
        <Button name="Dota 2"/>
        <Button name="valorant"/>
        <Button name="Web Development"/>
        <Button name="React-Routers"/>
        <Button name="Body-Buliding"/>
        <Button name="Comedy"/>
        <Button name="PUBG Mobile"/>
        <Button name="Conversation"/>
        <Button name="Indian Music"/>
    </div>
  )
}

export default ButtonList