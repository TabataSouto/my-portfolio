// pega o horário atual;
const tick = () => new Date().toLocaleTimeString('pt', { hour12: true });

const functions = {
  tick,
}

export default functions;