import styled from 'styled-components';

const Main = styled.main`
  align-items: center;
  border-top: 2px solid ${ ({ theme }) => theme.borders.borderFooter };
  cursor: default;
  display:flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 1.5cm;
  padding: 0.8cm;
`

const Profile = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  img {
    border-radius: 100%;
    margin-bottom: 1cm;
    width: 150px;
  }
`

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
p {
    align-items: center;
    background: ${ ({ theme }) => theme.backgrounds.backgroundIcons };
    border-radius: 5px;
    display: flex;
    height: 3em;
    padding: 0 20px;
    width: 30em;
    a {
      color: ${ ({ theme }) => theme.colors.contact };
      margin-left: 15px;
      text-decoration: none;
    }
  }
`

const Styles = {
  Main,
  Profile,
  Contacts

}

export default Styles;