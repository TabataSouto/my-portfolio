import PropTypes from "prop-types"
import Styles from './Styles';

function Header({ image, text}) {
  return (
    <Styles.Header>
      <section>
        <Styles.ImgIcons>
          <img src={ image } alt="gamer man" />
        </Styles.ImgIcons>
          <p>{ text }</p>
      </section>
    </Styles.Header>
  )
}

Header.propTypes = {
  image: PropTypes.any.isRequired,
  text: PropTypes.any.isRequired
}

export default Header;