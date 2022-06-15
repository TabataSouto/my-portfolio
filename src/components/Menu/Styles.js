import styled from 'styled-components';

// const Container = styled.section`
//   align-items:center;
//   display: flex;
//   justify-content: center;
//   img {
//     background: ${ ({ theme }) => theme.backgrounds.backgroundIcons };
//     border-radius: 100%;
//     padding: 15px;
//     object-fit: cover;
//     height: 70px;
//     width: 70px;
//   }
// `

const Container = styled.section`
  align-items:center;
  display: flex;
  justify-content: center;
  gap: 7px;
  height: 12em;
  img {
    height: 40px;
    width: 40px;
  }
`
const Border = styled.div`
  align-items: center;
  border: 3px solid transparent;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  transition: border 1s;

  :hover {
    border: 3px solid ${ ({ theme }) => theme.borders.borderCard };
    border-radius: 100%;
    height: 85px;
    width: 85px;
  }
  button {
    align-items: center;
    background: ${ ({ theme }) => theme.backgrounds.backgroundIcons };
    border: none;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    margin: 5px;
    height: 70px;
    width: 70px;
  }
`

const Styles = {
  Container,
  Border
};

export default Styles;