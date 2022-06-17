import styled from 'styled-components';

const Main = styled.main`
  height: 100%;
  align-items: center;
  border-top: 2px solid ${ ({ theme }) => theme.borders.borderFooter };
  display:flex;
  justify-content: center;
  margin: 0 1.5cm;
  padding: 0.8cm;
  gap: 10px;
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 60em;
    div {
      background-color: ${ ({ theme }) => theme.backgrounds.backgroundIcons };
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 3px;
      height: 130px;
      width: 120px;
    img {
      width: 80px;
    }
    p {
      color: ${ ({ theme }) => theme.colors.titleHome };
      font-size: 10px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }  
  }
`

const Styles = {
  Main
}

export default Styles;