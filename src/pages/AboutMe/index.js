import Footer from '../../components/Footer';
import Description from '../../components/Description'
import HeaderAbout from '../../components/HeaderAbout';

function AboutMe() {
  return (
    <main>
      <HeaderAbout />
      <Description />
      <Footer
        buttonX='Home'
        buttonY='Projetos'
        buttonB='Contato'
      />
    </main>
  )
}

export default AboutMe;