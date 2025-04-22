import React from 'react'
import { BlurryBackgroundCircle, BlurryBackgroundContainer } from './BlurryBackgroundElements'

function BlurryBackground() {
  return (
    <BlurryBackgroundContainer>
        <BlurryBackgroundCircle color={"#9FFFBB"} X={0} Y={30} size={30}></BlurryBackgroundCircle>
        <BlurryBackgroundCircle color={"#9FFFBB"} X={40} Y={0} size={30}></BlurryBackgroundCircle>
        <BlurryBackgroundCircle color={"#E4AAB8"} X={5} Y={5} size={40}></BlurryBackgroundCircle>
        <BlurryBackgroundCircle color={"#E4AAB8"} X={100} Y={50} size={45}></BlurryBackgroundCircle>
        <BlurryBackgroundCircle color={"#9FFFBB"} X={46} Y={110} size={25}></BlurryBackgroundCircle>    
        <BlurryBackgroundCircle color={"#E4AAB8"} X={54} Y={100} size={23}></BlurryBackgroundCircle>
    </BlurryBackgroundContainer>
  )
}

export default BlurryBackground