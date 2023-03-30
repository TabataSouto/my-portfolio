import styled from "styled-components";

const Main = styled.main`
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 80vh;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 15em;
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & p {
    letter-spacing: 1px;
    opacity: 0;
    font-size: 10px;
  }
`;

const TitleContainer = styled.div`
  height: 70px;
  letter-spacing: 1px
`

const ImgHome = styled.img`
  border: 3px solid white;
  border-radius: 100%;
  padding: 10px;
  width: 100px;
  margin: 10px;
  cursor: pointer;
  transition: width 1s, margin 1s;
  &:hover {
    width: 110px;
    margin: 15px;
  }
`;

const ImgLoading = styled.img`
  width: 80px;
`;

const NotAvaibledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    margin-bottom: 10px;
    color: brown;
    transition: opacity 1s;
  }
  &:hover p {
    opacity: 1;
  }
`;

const AvaibledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -10px;
  & p {
    color: rgb(37, 173, 193);
    transition: opacity 1s;
  }
  &:hover p {
    opacity: 1;
  }
`;

const Styles = {
  Container,
  TitleContainer,
  ImgHome,
  Main,
  ImgLoading,
  NotAvaibledProfile,
  AvaibledProfile
};
export default Styles;
