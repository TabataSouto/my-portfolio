import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../data/request";
import icons from "../../images";

import Styles from "./Styles";

function Navigation() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .get("/contrasts")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const history = useHistory();

  return (
    <Styles.Main>
      {isLoading || !data ? (
        <img
          style={{ width: "80px" }}
          src={icons.loadingIcon}
          alt="loading icon"
        />
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
                <img src={data[0].image} alt="imagem do projeto em detaque" />
              </a>
            </div>
          </Styles.Card>
          <Styles.Card>
            <p>{data[1].title}</p>
            <div>
              <img
                src={data[1].image}
                alt="imagem sobre hard skills"
                onClick={() => history.push("/hard-skills")}
              />
            </div>
          </Styles.Card>
          <Styles.Card>
            <p>{data[2].title}</p>
            <div>
              <img
                src={data[2].image}
                alt="imagem sobre soft skills"
                onClick={() => history.push("/soft-skills")}
              />
            </div>
          </Styles.Card>
        </Styles.ContainerCard>
      )}
    </Styles.Main>
  );
}

export default Navigation;
