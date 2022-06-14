import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const Gamers = styled.div`
  align-items: center;
  display: flex;
  margin: 1.5cm;
`
const Infos = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  margin: 1.5cm;
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
    object-fit : cover ;
  }
`

const Styles = {
  Header,
  ImgIcons,
  Gamers,
  Infos
};

export default Styles;