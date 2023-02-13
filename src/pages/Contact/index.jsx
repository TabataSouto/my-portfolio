import React from 'react'
import Styles from './Styles'
import icons from '../../images';

import MainHeader from '../../components/MainHeader';
import InfosContact from '../../components/InfosContact';
import Footer from '../../components/Footer';

function Contact() {
  return (
    <Styles.Main>
      <MainHeader
        image={ icons.iconContact }
        text="Contato"
      />
      <InfosContact />
      <Footer
        buttonX='Home'
        pathButtonX='/home'
        buttonA='Projetos'
        pathButtonA='/projects'
        buttonY='Soft Skills'
        pathButtonY='/soft-skills'
        buttonB='Hard Skills'
        pathButtonB='/hard-skills'
      />
    </Styles.Main>
  )
}

export default Contact;