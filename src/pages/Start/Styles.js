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

const ImgHome = styled.img`
  border: 3px solid white;
  border-radius: 100%;
  height: 100px;
  padding: 10px;
  width: 100px;
`

const Container = styled.section`
  align-items: center;
  display: flex;
  font-family: 'Press Start 2P', cursive;
  font-weight: bold;
  gap: 10px;
  letter-spacing: 2px;
  &:hover {
    cursor: default;
  }
  & p:active {
    transform: scale(0.9);
  }
  & img {
    width: 25px;
    height: 20px;
  }
`
const Styles = {
  Container,
  ImgHome,
  Main,
}
export default Styles;