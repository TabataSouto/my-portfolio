import React from "react";
import { useHistory } from "react-router-dom";
import detach from "../../data/index";
import Styles from "./Styles";

function Navigation() {
  const history = useHistory();

  return (
    <Styles.Main>
      <Styles.ContainerCard>
        <Styles.Card>
          <p>{detach.highlights[0].name}</p>
          <div>
            <img
              src={detach.highlights[0].image}
              alt="imagem dos projetos em destaque"
              onClick={() => history.push("/projects")}
            />
          </div>
        </Styles.Card>
        <Styles.Card>
          <p>{detach.highlights[1].name}</p>
          <div>
            <img
              src={detach.highlights[1].image}
              alt="imagem sobre hard skills"
              onClick={() => history.push("/hard-skills")}
            />
          </div>
        </Styles.Card>
        <Styles.Card>
          <p>{detach.highlights[2].name}</p>
          <div>
            <img
              src={detach.highlights[2].image}
              alt="imagem dos projetos em destaque"
              // onClick={() => history.push("/projects")}
            />
          </div>
        </Styles.Card>
      </Styles.ContainerCard>
    </Styles.Main>
  );
}

export default Navigation;
