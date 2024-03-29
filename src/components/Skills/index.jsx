import React, { useEffect, useState } from "react";
import api from '../../data/request';
import Styles from "./Styles";
import icons from "../../images";

function Skills() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .get("/hardskills")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <Styles.Main>
      {isLoading || !data ? (
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
