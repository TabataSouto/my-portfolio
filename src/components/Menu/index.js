import icons from '../../images/index';
import Styles from './Styles';

function Menu() {
  return (
    <Styles.Container>
      <div>
        <img src={ icons.iconMessage } alt="" />
      </div>
      <div>
        <img src={ icons.iconGamerOne } alt="" />
      </div>
      <div>
        <img src={ icons.iconGamerOne } alt="" />
      </div>
      <div>
        <img src={ icons.iconGamerOne } alt="" />
      </div>
    </Styles.Container>
  )
};

export default Menu;