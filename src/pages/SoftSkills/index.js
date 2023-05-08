import React from 'react'
import Styles from './Styles'
import icons from '../../images';

import MainHeader from '../../components/MainHeader';
import Footer from '../../components/Footer';
import CardSoftSkills from '../../components/Soft';

function SoftSkills() {
  return (
    <Styles.Main>
      <MainHeader
        image={ icons.iconSoftSkills }
        text="SoftSkills"
      />
      <CardSoftSkills />
      <Footer
        buttonX='Home'
        pathButtonX='/home'
        buttonA='Contato'
        pathButtonA='/contact'
        buttonY='Projetos'
        pathButtonY='/projects'
        buttonB='Hard Skills'
        pathButtonB='/hard-skills'
      />
    </Styles.Main>
  )
}

export default SoftSkills;