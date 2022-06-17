import { Link } from 'react-router-dom';
import icons from '../../images';
import data from '../../data';
import Styles from './Styles';

const { projects } = data;

function CardProjects() {
  return (
    <Styles.Container>
      {
        projects.map(({
          id,
          name,
          description,
          skills,
          image,
          webPage,
          gitHub
        }) => (
          <Styles.Card key={ id }>
            <div>
              <img src={ image } alt={ `imagem do projeto ${name}` }/>
              <Styles.CardInfos>
                <h3>{ name }</h3>
                <p>{ description }</p>
              </Styles.CardInfos>
              <Styles.Skills>
                { skills.map((skill) => (
                  <p>{ skill }</p>
                ))}
              </Styles.Skills>
              <Styles.Links>
                <Link to={ gitHub }>
                  <img src={ icons.iconGithub } alt=" icon web page"/>
                </Link>
                <Link to={ webPage }>
                  <img src={ icons.iconWebPage } alt=" icon web page"/>
                </Link>
              </Styles.Links>
            </div>
          </Styles.Card>
        ))
      }
    </Styles.Container>
  )
}

export default CardProjects;