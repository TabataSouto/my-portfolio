import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  section {
    align-items: center;
    display: flex;
    margin: 1.5cm;
  }
  section:nth-child(2) {
    display: flex;
    gap: 20px;
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
    object-fit : cover ;
  }
`

const Styles = {
  Header,
  ImgIcons,
};

export default Styles;