import React from 'react'
import { ScrollingBandSubSection, ScrollingBandCont, ScrollingBandContent, ScrollingBandImg, ScrollingBandText } from './ScrollingBandElements'
import etoile from "../../images/etoile.png"

function ScrollingBand() {
  return (
    <ScrollingBandCont>
        <ScrollingBandSubSection>
          <ScrollingBandText>Votre atelier à domicile !</ScrollingBandText>
          <ScrollingBandImg  src={etoile} />
        </ScrollingBandSubSection>
            
        <ScrollingBandSubSection>
          <ScrollingBandText>Votre atelier à domicile !</ScrollingBandText>
          <ScrollingBandImg  src={etoile} />
        </ScrollingBandSubSection>

        <ScrollingBandSubSection>
          <ScrollingBandText>Votre atelier à domicile !</ScrollingBandText>
          <ScrollingBandImg  src={etoile} />
        </ScrollingBandSubSection>

        <ScrollingBandSubSection>
          <ScrollingBandText>Votre atelier à domicile !</ScrollingBandText>
          <ScrollingBandImg  src={etoile} />
        </ScrollingBandSubSection>

        <ScrollingBandSubSection>
          <ScrollingBandText>Votre atelier à domicile !</ScrollingBandText>
          <ScrollingBandImg  src={etoile} />
        </ScrollingBandSubSection>

        <ScrollingBandSubSection>
          <ScrollingBandText>Votre atelier à domicile !</ScrollingBandText>
          <ScrollingBandImg  src={etoile} />
        </ScrollingBandSubSection>
    </ScrollingBandCont>
  )
}

export default ScrollingBand