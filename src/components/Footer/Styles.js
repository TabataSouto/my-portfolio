import styled from 'styled-components';

const Footer = styled.footer`
  border-top: 2px solid ${ ({ theme }) => theme.borders.borderFooter };
  display: flex;
  justify-content: space-between;
  margin: 1.5cm;
`

const Controller = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0.3cm 1.5cm;
`
const Buttons = styled.section`
  align-items: center;
  display: flex;
  margin: 0.3cm 1.5cm;
  gap: .50px;
  span {
    align-items: center;
    background: white;
    border-radius: 100%;
    color: ${ ({ theme }) => theme.colors.buttons };
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin: 0 0.3cm;
    padding: 12px;
    height: 10px;
    width: 10px;
  }
`

const Battery = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  div:nth-child(1) {
    background-color: ${ ({ theme }) => theme.backgrounds.backgroundBatteryGreen };
    width: 8px;
    height: 8px;
  }
  div {
    background-color: ${ ({ theme }) => theme.backgrounds.backgroundBattery };
    height: 6px;
    margin: 0 2px;
    width: 6px;
  }
`

const Styles = {
  Footer,
  Controller,
  Buttons,
  Battery
}

export default Styles;