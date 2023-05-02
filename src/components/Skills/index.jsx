import React from "react";
import axios from "axios";
import Styles from "./Styles";
import { useQuery } from "react-query";
import icons from "../../images";

function Skills() {
  const { data, isLoading } = useQuery("projects", () => {
    return axios
      .get("https://portfoliodb-tabatacsouto.b4a.run/hardskills")
      .then((response) => response.data);
  });
  return (
    <Styles.Main>
      {isLoading ? (
        <img
          style={{ width: "80px" }}
          src={icons.loadingIcon}
          alt="loading icon"
        />
      ) : (
        <section>
          {data.map(({ image, title }) => (
            <div>
              <img src={image} alt={title} />
              <p>{title}</p>
            </div>
          ))}
        </section>
      )}
    </Styles.Main>
  );
}

export default Skills;
