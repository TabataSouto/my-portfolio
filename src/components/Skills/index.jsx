import React from 'react'
import Styles from './Styles';
import icons from '../../images';

function Skills() {
  return (
    <Styles.Main>
      <section>
        <div>
          <img src={ icons.iconLinux } alt ="" />
          <p>Linux</p>
        </div>
        <div>
          <img src={ icons.iconVSCode } alt ="" />
          <p>VSCode</p>
        </div>
        <div>
          <img src={ icons.iconGit } alt ="" />
          <p>Git</p>
        </div>
        <div>
          <img src={ icons.iconHTML } alt ="" />
          <p>HTML5</p>
        </div>
        <div>
          <img src={ icons.iconCSS } alt ="" />
          <p>CSS3</p>
        </div>
        <div>
          <img src={ icons.iconES6 } alt ="" />
          <p>ES6</p>
        </div>
        <div>
          <img src={ icons.iconReact } alt ="" />
          <p>React</p>
        </div>
        <div>
          <img src={ icons.iconRedux } alt ="" />
          <p>Redux</p>
        </div>
        <div>
          <img src={ icons.iconJest } alt ="" />
          <p>Jest</p>
        </div>
        <div>
          <img src={ icons.iconNodeJS } alt ="" />
          <p>Node JS</p>
        </div>
        <div>
          <img src={ icons.iconMySQL } alt ="" />
          <p>MySQL</p>
        </div>
        <div>
          <img src={ icons.iconDocker } alt ="" />
          <p>Docker</p>
        </div>
        <div>
          <img src={ icons.iconTestingLibrary } alt ="" />
          <p>Testing Library</p>
        </div>
      </section>
    </Styles.Main>
  )
}

export default Skills;