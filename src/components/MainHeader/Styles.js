import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 1.5cm;
  section {
    align-items: center;
    display: flex;
    gap: 5px;
    margin: 0.7cm 1.5cm;
  }
`

const ImgIcons = styled.div`
  background: white;
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
};

export default Styles;