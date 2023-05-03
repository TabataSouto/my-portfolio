import React, { useEffect, useState } from "react";
import api from '../../data/request';
import icons from "../../images";
import Styles from "./Styles";

function CardSoftSkills() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .get("/softskills")
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
          ({ id, image }) => (
            <Styles.Card key={id}>
              <div>
                <img src={image} alt="certificados e reconhecimentos" />
              </div>
            </Styles.Card>
          )
        )
      )}
    </Styles.Container>
  );
}

export default CardSoftSkills;
