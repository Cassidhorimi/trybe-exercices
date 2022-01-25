
const task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tarefas = ['dormir', 'acordar', 'comer'];
function App() {
  return (
    <ul>{tarefas.map(tarefa => task(tarefa))}</ul>
  );
}

export default App;
