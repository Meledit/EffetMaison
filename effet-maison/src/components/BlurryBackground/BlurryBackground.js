import React from 'react'
import { BlurryBackgroundCircle, BlurryBackgroundContainer } from './BlurryBackgroundElements'

function BlurryBackground() {
  return (
    <BlurryBackgroundContainer>
        <BlurryBackgroundCircle color={"#9FFFBB"} X={0} Y={25} size={400}></BlurryBackgroundCircle>
        <BlurryBackgroundCircle color={"#E4AAB8"} X={0} Y={0} size={400}></BlurryBackgroundCircle>
        <BlurryBackgroundCircle color={"#E4AAB8"} X={75} Y={100} size={400}></BlurryBackgroundCircle>
        <BlurryBackgroundCircle color={"#E4AAB8"} X={100} Y={100} size={200}></BlurryBackgroundCircle>
        <BlurryBackgroundCircle color={"#9FFFBB"} X={100} Y={0} size={300}></BlurryBackgroundCircle>
    </BlurryBackgroundContainer>
  )
}

export default BlurryBackground