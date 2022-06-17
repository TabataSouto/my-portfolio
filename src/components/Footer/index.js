import PropTypes from "prop-types"
import { useHistory } from "react-router-dom";

import icons from '../../images';
import Styles from './Styles';

function Footer({
  buttonX = null,
  buttonA = null,
  buttonY = null,
  buttonB = null,
  pathButtonX,
  pathButtonA,
  pathButtonY,
  pathButtonB
}) {
  const history = useHistory();

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
          <div>
            <button
              type="button"
              onClick={ () => history.push(pathButtonX)}
            >
              X
            </button>
            <p>{ buttonX }</p>
          </div>
        }
        { 
          buttonA !== null &&
          <div>
            <button
              type="button"
              onClick={ () => history.push(pathButtonA)}
            >
              A
            </button>
            <p>{ buttonA }</p>
          </div>
        }
        {
          buttonY !== null &&
          <div>
            <button
              type="button"
              onClick={ () => history.push(pathButtonY)}
            >
              Y
            </button>
            <p>{ buttonY }</p>
          </div>
        }
        {
          buttonB !== null &&
          <div>
            <button
              type="button"
              onClick={ () => history.push(pathButtonY)}
            >
              B
            </button>
            <p>{ buttonB }</p>
          </div>
        }
      </Styles.Buttons>
    </Styles.Footer>
  )
}

Footer.propTypes = {
  buttonA: PropTypes.string,
  buttonB: PropTypes.string,
  buttonX: PropTypes.string,
  buttonY: PropTypes.string,
  path: PropTypes.string,
  pathButtonA: PropTypes.string,
  pathButtonB: PropTypes.string,
  pathButtonX: PropTypes.string,
  pathButtonY: PropTypes.string,
}

export default Footer;