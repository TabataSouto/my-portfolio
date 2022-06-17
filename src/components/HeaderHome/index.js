import React, { useState, useEffect } from "react";
import functions from '../../utils/';
import Styles from './Styles';

import icons from '../../images';


function Header() {
  const [date, setDate] = useState(functions.tick);

  // referência para relógio: https://codestack.club/questions/1596531/exibir-relogio-em-reactjs
  useEffect(() => {
    // estado é atualizado a cada 1 segundo;
    const timerID = setInterval(() => setDate(functions.tick), 1000 );
    // comportamente willUmount, limpa a contagem sempre que a página é desmontada para atualizar;
    return () => {
      clearInterval(timerID);
    }
    // atualiza a página sempre que o estado date é atualizado;
  }, [date])

  return (
    <Styles.Header>
      <section>
        <Styles.ImgIcons>
          <img src={ icons.iconGamerOne } alt="gamer woman" />
        </Styles.ImgIcons>
        <Styles.ImgIcons>
          <img  src={ icons.gameController } alt="game control" />
        </Styles.ImgIcons>
        <Styles.ImgIcons>
          <img src={ icons.iconGamerTwo } alt="gamer man" />
        </Styles.ImgIcons>
        <Styles.ImgIcons>
          <img src={ icons.tabata } alt="gamer man" />
        </Styles.ImgIcons>
      </section>
      <section>
        Destaques
      </section>
      <section>
        <p>{ date }</p>
        <img src={ icons.wiFi } alt="" />
        <img src={ icons.iconBattery } alt="" />
      </section>
    </Styles.Header>
  )
}

export default Header;