// import Styles from './Styles';
import Header from '../../components/Header';
import Detach from '../../components/Detach';
import Footer from '../../components/Footer';
import Styles from './Styles';
import Menu from '../../components/Menu';

function Home() {
  return (
    <Styles.Main>
      <Header />
      <Detach />
      <Menu />
      <Footer
        buttonA='Sejam bem-vindos(as)'
      />
    </Styles.Main>
  )
}

export default Home;