import React from 'react'
import HeaderHome from '../../components/HeaderHome';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Styles from './Styles';

function Home() {
  return (
    <Styles.Main>
      <HeaderHome />
      <Main />
      <Footer
        buttonA='Sejam bem-vindos(as)'
      />
    </Styles.Main>
  )
}

export default Home;