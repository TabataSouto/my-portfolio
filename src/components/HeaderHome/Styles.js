import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 1.5cm;
  section {
    align-items: center;
    display: flex;
    margin: 0.7cm 1.5cm;
  }
  section:nth-child(2) {
    color: ${ ({ theme }) => theme.colors.titleHome }
  }
  section:nth-child(3) {
    gap: 15px;
  }
`

const ImgIcons = styled.div`
  border: 2px solid ${ ({ theme }) => theme.backgrounds.backgroundIcons };
  border-radius: 50%;
  margin: 0 5px;
  overflow: hidden;
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`

const Styles = {
  Header,
  ImgIcons,
};

export default Styles;