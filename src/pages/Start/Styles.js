import styled from "styled-components";

const Main = styled.main`
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 80vh;
`;

const ContainerImgs = styled.section`
  display: flex;
  align-items: center;
`;

const ImgHome = styled.img`
  border: 3px solid white;
  border-radius: 100%;
  padding: 10px;
  width: 100px;
  margin: 10px;
  cursor: pointer;
  transition: width 1s, margin 1s;
  &:hover {
    width: 120px;
    margin: 15px;
  }
`;

const ImgLoading = styled.img`
  width: 80px;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-size: 10px;
    color: brown;
    letter-spacing: 1px;
    opacity: 0;
    transition: opacity 1s;
  }
  &:hover p {
    opacity: 1
  }
`

// const Container = styled.section`
//   align-items: center;
//   display: flex;
//   font-family: 'Press Start 2P', cursive;
//   font-weight: bold;
//   gap: 10px;
//   letter-spacing: 2px;
//   &:hover {
//     cursor: default;
//   }
//   & p:active {
//     transform: scale(0.9);
//   }
//   & img {
//     width: 25px;
//     height: 20px;
//   }
// `

const Styles = {
  ContainerImgs,
  ImgHome,
  Main,
  ImgLoading,
  ProfileCard
};
export default Styles;
