import React from 'react'
import icons from '../../images';
import { useHistory } from 'react-router-dom';
import Styles from './Styles';

function Start() {
  const history = useHistory();

  const handleClick = () => {
    return setTimeout(() => {
      history.push('/home')
    }, 800);
  }

  return(
    <Styles.Main>

      <section>
        <Styles.ImgHome src={ icons.iconHome } alt="icon game computer"/>
      </section>

      <Styles.Container onClick={ handleClick }>
        <img src={ icons.iconHand } alt="Hand icon" />
        <p>HOME Menu</p>
      </Styles.Container>

    </Styles.Main>
  )
};

export default Start; 