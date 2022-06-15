// pega o horário atual;
const tick = () => new Date().toLocaleTimeString('pt', { hour24: true });

const functions = {
  tick,
}

export default functions;