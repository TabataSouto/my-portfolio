import Styles from './Styles';
import icons from '../../images';

import Footer from '../../components/Footer';
import Profile from '../../components/Profile'
import MainHeader from '../../components/MainHeader';

function AboutMe() {
  return (
    <Styles.Main>
      <MainHeader
        image={ icons.tabata }
        text="Perfil da Tabata"
      />
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