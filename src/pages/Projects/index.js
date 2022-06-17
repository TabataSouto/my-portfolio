import Styles from './Styles'
import icons from '../../images';

import MainHeader from '../../components/MainHeader';
import CardProjects from '../../components/CardProjects';
import Footer from '../../components/Footer';

function Projects() {
  return (
    <Styles.Main>
      <MainHeader
        image={ icons.iconProjectsTwo }
        text="Projetos"
      />
      <CardProjects />
      <Footer
        buttonX='Home'
        pathButtonX='/home'
        buttonA='Contato'
        pathButtonA='/contact'
        buttonY='Soft Skills'
        pathButtonY='/soft-skills'
        buttonB='Hard Skills'
        pathButtonB='/hard-skills'
      />
    </Styles.Main>
  )
}

export default Projects;