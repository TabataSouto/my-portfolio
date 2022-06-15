import styled from 'styled-components';

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 20px;
  section h3 {
    color: ${ ({ theme }) => theme.colors.titleHome };
    text-align: left;
    text-transform: uppercase;
    width: 91vw;
  }
`

const ContainerCard = styled.section`
  display: flex;
  gap: 20px;
`

const Card = styled.div`
  height: 20em;
  width: 20em;
  div {
    align-items: center;
    border: 3px solid transparent;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    height: 20.2em;
    transition: border 2.5s;
    width: 20.2em;
  }
  div img {
    width: 19.8em;
    height: 19.7em;
    border-radius: none;
    padding: 5px;
    object-fit: cover;
  }
  p {
    color: ${ ({ theme }) => theme.colors.titleHome };
    font-size: 20px;
    padding: 10px 0;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  :hover div {
    border-color: ${ ({ theme }) => theme.borders.borderCard };
    border-radius: 10px;
  }
  :hover p {
    opacity: 1;
  }
`

const Styles = {
  Main,
  ContainerCard,
  // Container,
  Card,
}

export default Styles;