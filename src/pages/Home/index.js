// import Styles from './Styles';
import HeaderHome from '../../components/HeaderHome';
import DetachHome from '../../components/DetachHome';
import Footer from '../../components/Footer';
import Styles from './Styles';
import MenuHome from '../../components/MenuHome';

function Home() {
  return (
    <Styles.Main>
      <HeaderHome />
      <DetachHome />
      <MenuHome />
      <Footer
        buttonA='Sejam bem-vindos(as)'
      />
    </Styles.Main>
  )
}

export default Home;