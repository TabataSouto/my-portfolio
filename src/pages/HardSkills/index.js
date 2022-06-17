import Styles from './Styles';
import icons from '../../images';

import Footer from '../../components/Footer';
import Skills from '../../components/Skills'
import MainHeader from '../../components/MainHeader';

function AboutMe() {
  return (
    <Styles.Main>
      <MainHeader
        image={ icons.iconGit }
        text="Habilidades"
      />
      <Skills />
      <Footer
        buttonX='Home'
        pathButtonX='/home'
        buttonA='Projetos'
        pathButtonA='/projects'
        buttonY='Soft Skills'
        pathButtonY='/soft-skills'
        buttonB='Contato'
        pathButtonB='/contact'
      />
    </Styles.Main>
  )
}

export default AboutMe;