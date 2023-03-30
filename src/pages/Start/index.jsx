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
            <Styles.ProfileCard>
              <Styles.ImgHome
                src={icons.iconGamerOne}
                alt="icon game computer"
              />
              <p>Perfil indisponível!</p>
            </Styles.ProfileCard>
            <Styles.ProfileCard>
              <Styles.ImgHome
                src={icons.gameController}
                alt="icon game computer"
              />
              <p>Perfil indisponível!</p>
            </Styles.ProfileCard>
            <Styles.ProfileCard>
              <Styles.ImgHome
                src={icons.tabata}
                alt="icon game computer"
                onClick={handleClick}
              />
              <p style={{ color: '#25ADC1' }}>Tabata Souto</p>
              <p style={{ color: '#25ADC1' }}>Desenvolvedora Front-end</p>
            </Styles.ProfileCard>
            <Styles.ProfileCard>
              <Styles.ImgHome
                src={icons.iconGamerTwo}
                alt="icon game computer"
              />
              <p>Perfil indisponível!</p>
            </Styles.ProfileCard>
          </>
        )}
      </Styles.ContainerImgs>
    </Styles.Main>
  );
}

export default Start;
