import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Styles from "./Styles";
import { useQuery } from "react-query";

function Navigation() {
  const { data, isLoading } = useQuery("projects", () => {
    return axios
      .get("https://portfoliodb-tabatacsouto.b4a.run/contrasts")
      .then((response) => response.data);
  });

  const history = useHistory();

  return (
    <>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <Styles.Main>
          <Styles.ContainerCard>
            <Styles.Card>
              <p>{data[2].title}</p>
              <div>
              <a target="_blank" rel="noopener noreferrer" href="https://stock-investing-app-xp.vercel.app/">
                <img
                  src={data[2].image}
                  alt="imagem do projeto Tryunfo"
                />
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
            <p>{data[0].title}</p>
            <div>
              <img
                src={data[0].image}
                alt="imagem dos projetos em destaque"
                onClick={() => history.push("/hard-skills")}
              />
            </div>
          </Styles.Card>
          </Styles.ContainerCard>
        </Styles.Main>
      )}
    </>
  );
}

export default Navigation;
