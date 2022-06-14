import iconHome from '../../images/icon-home.png';
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
        <Styles.ImgHome src={ iconHome } alt="icon game computer"/>
      </section>

      <Styles.Container onClick={ handleClick }>
        <img src={ handIcon } alt="Hand icon" />
        <p>HOME Menu</p>
      </Styles.Container>

    </Styles.Main>
  )
};

export default Start; 