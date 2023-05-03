import styled from 'styled-components';

const Container = styled.main`
  border-top: 2px solid ${ ({ theme }) => theme.borders.borderFooter };
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  height: 100%;
  margin: 0 1.5cm;
  padding: 0.8cm;
`

const Card = styled.div`
  border: 3px solid transparent;
  padding: 5px;
  height: auto;
  transition: border 2s;
  height: 18em;
  :hover {
    border-color: ${ ({ theme }) => theme.borders.borderCard };
  }
  div:nth-child(1) {
    /* background: ${ ({ theme }) => theme.backgrounds.backgroundIcons };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25.4em; */
    img {
      width: 17em;
    }
}
`

const Styles = {
  Container,
  Card,
}

export default Styles;