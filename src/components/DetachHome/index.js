import detach from '../../data/index';
import Styles from './Styles';

function Navigation() {
  return(
    <Styles.Main>
      <Styles.ContainerCard>
        { detach.highlights.map(({ id, name, image }) => (
          <Styles.Card key={ id }>
            <p>{ name }</p>
            <div>
              <img src={ image } alt="imagem dos projetos em destaque" />
            </div>
          </Styles.Card>
        ))}
      </Styles.ContainerCard>
    </Styles.Main>
  )
}

export default Navigation;
