import styled from 'styled-components';

const Container = styled.section`

  align-items:center;
  display: flex;
  font-size: 18px;
  justify-content: center;
  gap: 7px;
  height: 12em;
  & section {
    align-items: center;
    border: 3px solid transparent;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: border 1s, margin 1s;
  }
  & p {
    position: absolute;
    margin-top: 3.1cm;
    color: transparent;
    opacity: 0;
    transition: opacity 1s;
  }
  & section:hover {
    border: 3px solid ${ ({ theme }) => theme.borders.borderCard };
    border-radius: 100%;
    height: 75px;
    width: 75px;
    margin: 5px;
  }
  & :hover p {
    opacity: 1;
    color: ${ ({ theme }) => theme.colors.titleHome };
  }
  & button {
    align-items: center;
    background: ${ ({ theme }) => theme.backgrounds.backgroundIcons };
    border: none;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    height: 60px;
    width: 60px;
  }
  img {
    height: 35px;
    width: 35px;
  }
`
const Styles = {
  Container,
};

export default Styles;