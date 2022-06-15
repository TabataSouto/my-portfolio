import Styles from './Styles';

import Footer from '../../components/Footer';
import Profile from '../../components/Profile'
import HeaderAbout from '../../components/HeaderAbout';

function AboutMe() {
  return (
    <Styles.Main>
      <HeaderAbout />
      <Profile />
      <Footer
        buttonX='Home'
        pathButtonX='/home'
        buttonY='Projetos'
        pathButtonY='/projects'
        buttonB='Contato'
        pathButtonB='/contact'
      />
    </Styles.Main>
  )
}

export default AboutMe;