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

const Container = styled.section`
  align-items: center;
  display: flex;
  font-family: 'Roboto Mono', monospace;
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
const styles = {
  Container,
  Main,
}
export default styles;
