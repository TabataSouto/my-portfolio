import React from "react";
import Styles from "./Styles";
import hardSkills from "../../data/hardskills";

function Skills() {
  return (
    <Styles.Main>
      <section>
        {hardSkills.map(({ image, name }) => (
          <div>
            <img src={image} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </section>
    </Styles.Main>
  );
}

export default Skills;
