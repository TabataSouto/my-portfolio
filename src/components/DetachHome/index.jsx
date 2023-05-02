import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import icons from "../../images";
import axios from "axios";

import Styles from "./Styles";

function Navigation() {
  const { data, isLoading } = useQuery("projects", () => {
    return axios
      .get("https://portfoliodb-tabatacsouto.b4a.run/contrasts")
      .then((response) => response.data);
  });

  const history = useHistory();

  return (
    <Styles.Main>
      {isLoading ? (
        <Styles.ImgLoading src={icons.loadingIcon} alt="loading icon" />
      ) : (
        <Styles.ContainerCard>
          <Styles.Card>
            <p>{data[0].title}</p>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stock-investing-app-xp.vercel.app/"
              >
                <img src={data[0].image} alt="imagem do projeto Tryunfo" />
              </a>
            </div>
          </Styles.Card>
          <Styles.Card>
            <p>{data[1].title}</p>
            <div>
              <img
                src={data[1].image}
                alt="imagem sobre hard skills"
                onClick={() => history.push("/soft-skills")}
              />
            </div>
          </Styles.Card>
          <Styles.Card>
            <p>{data[2].title}</p>
            <div>
              <img
                src={data[2].image}
                alt="imagem dos projetos em destaque"
                onClick={() => history.push("/hard-skills")}
              />
            </div>
          </Styles.Card>
        </Styles.ContainerCard>
      )}
    </Styles.Main>
  );
}

export default Navigation;
