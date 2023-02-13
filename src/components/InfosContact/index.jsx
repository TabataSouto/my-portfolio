import React from 'react'
import Styles from "./Styles";
import icons from '../../images';

function InfosContact() {
  return (
    <Styles.Main>
      <Styles.Profile>
        <img src={ icons.tabata } alt="" />
        <p>Tabata</p>
      </Styles.Profile>
      <Styles.Contacts>
        <p>E-mail:
          <a href='mailto:tabatac.souto@gmail.com'>
            tabatac.souto@gmail.com
          </a>
        </p>
        <p>Linkedin: 
          <a href="https://www.linkedin.com/in/tabatasouto/">
            linkedin.com/in/tabatasouto/
          </a>
        </p>
        <p>Github:
          <a href=" https://github.com/TabataSouto">
            github.com/TabataSouto
          </a>
        </p>
      </Styles.Contacts>
    </Styles.Main>
  )
}

export default InfosContact;