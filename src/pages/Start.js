import gameCodeIcon from '../images/icon-blue2.png';
import handIcon from '../images/hand-icon.png';
import styled from 'styled-components';

const Main = styled.main`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  height: 80vh;
`;

const SectionNewGame = styled.section`
  // estilização apenas da sction
  align-items: center;
  display: flex;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  gap: 10px;
  letter-spacing: 2px;
  // colocar o pointer de seta quando passar o mouse na section
  &:hover {
    cursor: default;
  }
  // pseudoclasse que muda o tamanho da font ao clicra no p;
  & p:active {
    transform: scale(0.9);
  }
  // estiliza a tag img que tem dentro de section
  & img {
    width: 25px;
    height: 20px;
  }
`
function Start() {
  return(
    <Main>

      <section>
        <img src={ gameCodeIcon } alt="icon game computer"/>
      </section>
      
      <SectionNewGame
        onClick={ () => 'Olá' }
      >
        <img src={ handIcon } alt="Hand icon" />
        <p>New game</p>
      </SectionNewGame>

    </Main>
  )
};

export default Start;