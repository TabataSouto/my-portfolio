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
    transition: border 1s;
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
    height: 85px;
    width: 85px;
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
    margin: 5px;
    height: 70px;
    width: 70px;
  }
  img {
    height: 40px;
    width: 40px;
  }
`
const Styles = {
  Container,
};

export default Styles;