import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import icons from "../../images";
// import icons from "../../images";
// import data from "../../data/request";
import Styles from "./Styles";

function CardProjects() {
  const { data, isLoading } = useQuery("projects", () => {
    return axios
      .get("https://portfoliodb-tabatacsouto.b4a.run/projects")
      .then((response) => response.data);
  });

  return (
    <Styles.Container>
      {isLoading ? (
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
                  {skills.split(",").map((skill) => (
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
