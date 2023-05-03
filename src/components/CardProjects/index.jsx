import React, { useEffect, useState } from "react";
import api from '../../data/request';
import icons from "../../images";
import Styles from "./Styles";

function CardProjects() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .get("/projects")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styles.Container>
      {isLoading || !data ? (
        <img
          style={{ width: "80px" }}
          src={icons.loadingIcon}
          alt="loading icon"
        />
      ) : (
        data.map(
          ({ id, title, description, skills, image, webPage, gitHub }) => (
            <Styles.Card key={id}>
              <div>
                <img src={image} alt={`imagem do projeto ${title}`} />
                <Styles.CardInfos>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Styles.CardInfos>
                <Styles.Skills>
                  { skills && skills.split(",").map((skill) => (
                    <p>{skill.toUpperCase()}</p>
                  ))}
                </Styles.Skills>
                <Styles.Links>
                  <a href={gitHub} target="blank">
                    <img
                      src={icons.iconGithub}
                      alt=" icon web page"
                      style={{ width: "25px " }}
                    />
                  </a>
                  {webPage !== "N/A" && ( 
                    <a href={webPage} target="blank">
                      <img
                        src={icons.iconWebPage}
                        alt=" icon web page"
                        style={{ width: "25px " }}
                      />
                    </a>
                  )}
                </Styles.Links>
              </div>
            </Styles.Card>
          )
        )
      )}
    </Styles.Container>
  );
}

export default CardProjects;
