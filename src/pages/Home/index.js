// import Styles from './Styles';
import Header from '../../components/Header';
import Emphasis from '../../components/Emphasis';
import Footer from '../../components/Footer';

function Home() {
  return (
    <section>
      <Header />
      <Emphasis />
      <Footer
        buttonA='OK'
      />
    </section>
  )
}

export default Home;