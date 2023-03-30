import React, { useState } from "react";
import icons from "../../images";
import { useHistory } from "react-router-dom";
import Styles from "./Styles";

function Start() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    return setTimeout(() => {
      history.push("/home");
      setLoading(false);
    }, 800);
  };

  return (
    <Styles.Main>
      <Styles.ContainerImgs>
        {loading ? (
          <Styles.ImgLoading src={icons.loadingIcon} alt="loading icon" />
        ) : (
          <>
            <Styles.NotAvaibledProfile>
              <Styles.ImgHome
                src={icons.iconGamerOne}
                alt="icon game computer"
              />
              <p>Perfil indisponível!</p>
            </Styles.NotAvaibledProfile>
            <Styles.NotAvaibledProfile>
              <Styles.ImgHome
                src={icons.gameController}
                alt="icon game computer"
              />
              <p>Perfil indisponível!</p>
            </Styles.NotAvaibledProfile>
            <Styles.AvaibledProfile>
              <Styles.ImgHome
                src={icons.tabata}
                alt="icon game computer"
                onClick={handleClick}
              />
              <p>Tabata Souto</p>
              <p>Desenvolvedora Front-end</p>
            </Styles.AvaibledProfile>
            <Styles.NotAvaibledProfile>
              <Styles.ImgHome
                src={icons.iconGamerTwo}
                alt="icon game computer"
              />
              <p>Perfil indisponível!</p>
            </Styles.NotAvaibledProfile>
          </>
        )}
      </Styles.ContainerImgs>
    </Styles.Main>
  );
}

export default Start;
