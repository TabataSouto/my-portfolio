import gameCodeIcon from '../../images/icon-blue2.png';
import handIcon from '../../images/hand-icon.png';
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
        <img src={ gameCodeIcon } alt="icon game computer"/>
      </section>
      
      <Styles.Container onClick={ handleClick }>
        <img src={ handIcon } alt="Hand icon" />
        <p>New game</p>
      </Styles.Container>

    </Styles.Main>
  )
};

export default Start;