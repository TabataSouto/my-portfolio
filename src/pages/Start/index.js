import gameCodeIcon from '../../images/icon-blue2.png';
import handIcon from '../../images/hand-icon.png';
import { useHistory } from 'react-router-dom';
import Style from './Style';

function Start() {
  const history = useHistory();

  const handleClick = () => {
    return setTimeout(() => {
      history.push('/home')
    }, 800);
  }

  return(
    <Style.Main>

      <section>
        <img src={ gameCodeIcon } alt="icon game computer"/>
      </section>

      <Style.Container onClick={ handleClick }>
        <img src={ handIcon } alt="Hand icon" />
        <p>New game</p>
      </Style.Container>

    </Style.Main>
  )
};

export default Start; 