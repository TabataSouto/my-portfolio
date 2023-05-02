import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: auto;
`

const ContainerCard = styled.section`
  display: flex;
`

const Card = styled.div`
  height: 16em;
  width: 16em;
  div {
    align-items: center;
    border: 3px solid transparent;
    display: flex;
    justify-content: center;
    height: 15.4em;
    transition: border 2.5s;
    width: 15.4em;
  }
  img {
    cursor: pointer;
    width: 15em;
    height: 15em;
    padding: 3px;
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
  }
  :hover p {
    opacity: 1;
  }
`

const ImgLoading = styled.img`
  width: 80px;
`;

const Styles = {
  Main,
  ContainerCard,
  Card,
  ImgLoading
}

export default Styles;