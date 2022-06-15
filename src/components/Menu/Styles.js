import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  div {
    background: ${ ({ theme }) => theme.backgrounds.backgroundIcons };
    border-radius: 50%;
    margin: 0 5px;
    overflow: hidden;
    width: 80px;
    height: 80px;
  }
  div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Styles = {
  Container,
};

export default Styles;