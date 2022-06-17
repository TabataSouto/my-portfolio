import styled from 'styled-components';

const Container = styled.section`
  /* background-color: salmon; */
  height: 100%;
  align-items: center;
  border-top: 2px solid ${ ({ theme }) => theme.borders.borderFooter };
  /* border-spacing: 10px; */
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1.5cm;
  padding: 0.8cm;
  overflow: auto;
  scroll-margin-left: 20px;
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
/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #555; 
} */
  section {
    display: flex;
    justify-content: center;
  }`

const Photography = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  padding: 0 0.8cm 0 0;
  img {
    width: 150px;
  }
  div {
    margin-left: -0.8cm;
    margin-bottom: 0.2cm;
    background: ${ ({ theme }) => theme.backgrounds.backgroundIcons };
    border-radius: 100%;
      img {
      display: flex;
      width: 25px;
    }
  }
`
const Office = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-top: 1px solid ${ ({ theme }) => theme.borders.borderProfile }; */
  border-bottom: 1px solid ${ ({ theme }) => theme.borders.borderProfile };
  padding:  0.8cm 1cm;
  width: 40em;
  img {
    width: 22px;
  }
`

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${ ({ theme }) => theme.borders.borderProfile };
  border-bottom: 1px solid ${ ({ theme }) => theme.borders.borderProfile };
  padding: 10px 1cm;
  width: 40em;
  img {
    width: 25px;
  }
`

const Description = styled.section`
  /* background: brown; */
  display: flex;
  flex-direction: column;
  width: 51.3em;
`

const Title = styled.div`
  border-bottom: 1px solid ${ ({ theme }) => theme.borders.borderProfile };
  display: flex;
  justify-content: space-between;
  padding: 0 1cm 0.3cm 0;
  margin-top: 1cm;
  width: inherit;
  p {
    border-left: 4px solid white;
    padding-left: 10px;
    height: 16px;
  }
  img {
    width: 22px;
  }
`

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0.5cm 0.4cm 0 0.4cm;
  text-align: justify;
`

const Styles = {
  Container,
  Photography,
  Office,
  Name,
  Description,
  Title,
  AboutMe
}

export default Styles;