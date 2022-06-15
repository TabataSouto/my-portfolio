import Styles from './Styles';

import icons from '../../images';


function Header() {
  return (
    <Styles.Header>
      <section>
        <Styles.ImgIcons>
          <img src={ icons.tabata } alt="gamer man" />
        </Styles.ImgIcons>
          <p>Perfil da Tabata</p>
      </section>
    </Styles.Header>
  )
}

export default Header;