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
  overflow: auto;
  ::-webkit-scrollbar {
    width: 2px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${ ({ theme }) => theme.backgrounds.backgroundIcons }; 
  }
`

const Card = styled.div`
  cursor: default;
  display: flex;
  border: 3px solid transparent;
  padding: 5px;
  width: 18em;
  height: 26.5em;
  transition: border 2s;
  :hover {
    border-color: ${ ({ theme }) => theme.borders.borderCard };
  }
  div:nth-child(1) {
    background: ${ ({ theme }) => theme.backgrounds.backgroundIcons };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25.4em;
    img {
      width: 17em;
    }
}
`

const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  p {
    font-size: 14px;
    text-align: justify;
  }
`

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
  font-weight: bold;
  padding: 10px;
  gap: 5px;
  p {
    background: ${ ({ theme }) => theme.backgrounds.backgroundBody };
    color:  ${ ({ theme }) => theme.colors.skills };
    border-radius: 50px;
    padding: 5px 7px;
  }
`

const Links = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  padding: 0 10px;
  a:nth-child(1){
    text-decoration: none;
    img {
      width: 25px;
    }
  }
  a:nth-child(2){
    margin-left: 10px;
    text-decoration: none;
    img {
      width:35px;
    }
  }
`

const Styles = {
  Container,
  Card,
  CardInfos,
  Skills,
  Links
}

export default Styles;