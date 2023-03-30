// pega o horário atual;
const tick = () => new Date().toLocaleTimeString('pt', { hour24: true });

const keyPressed = (evt) => {
  evt = evt || window.event;
  let key = evt.keyCode || evt.which;
  return String.fromCharCode(key); 
}

const functions = {
  tick,
  keyPressed
}

export default functions;