import PropTypes from "prop-types"
import icons from '../../images';

import Styles from './Styles';

function Footer({
  buttonX = null,
  buttonA = null,
  buttonY = null,
  buttonB = null
}) {
  return(
    <Styles.Footer>
      <Styles.Controller>
        <Styles.Battery>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Styles.Battery>
        <div>
          <img src={ icons.switchProController } alt="" />
        </div>
      </Styles.Controller>
      <Styles.Buttons>
        {
          buttonX !== null &&
          <>
            <span>X</span>
            <p>{ buttonX }</p>
          </>
        }
        { 
          buttonA !== null &&
          <>
            <span>A</span>
            <p>{ buttonA}</p>
          </>
        }
        {
          buttonY !== null &&
          <>
            <span>Y</span>
            <p>{ buttonY }</p>
          </>
        }
        {
          buttonB !== null &&
          <>
            <span>B</span>
            <p>{ buttonB }</p>
          </>
        }
      </Styles.Buttons>
    </Styles.Footer>
  )
}

Footer.propTypes = {
  buttonA: PropTypes.string.isRequired,
  buttonX: PropTypes.string.isRequired,
}

export default Footer;