import { useHistory } from 'react-router-dom';
import icons from '../../images/index';
import Styles from './Styles';

function Menu() {
  const history = useHistory();

  return (
    <Styles.Container>
      <Styles.Border>
        <button
          type="button"
        >
          <img src={ icons.iconMessage } alt="contact icon" />
        </button>
      </Styles.Border>
      <Styles.Border>
        <button
          type="button"
        >
          <img src={ icons.iconProjects } alt="contact icon" />
        </button>
      </Styles.Border>
      <Styles.Border>
        <button
          type="button"
          onClick={ () => history.push('/about') }
        >
          <img src={ icons.iconAboutMe } alt="contact icon" />
        </button>
      </Styles.Border>
      <Styles.Border>
        <button
          type="button"
        >
          <img src={ icons.iconSoftSkills } alt="contact icon" />
        </button>
      </Styles.Border>
      <Styles.Border>
        <button
          type="button"
        >
          <img src={ icons.iconCode } alt="contact icon" />
        </button>
      </Styles.Border>
      <Styles.Border>
        <button
          type="button"
        >
          <img src={ icons.iconHome } alt="contact icon" />
        </button>
      </Styles.Border>
    </Styles.Container>
  )
};

export default Menu;