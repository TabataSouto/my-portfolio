import icons from '../../images/index';
import Styles from './Styles';

function Menu() {
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