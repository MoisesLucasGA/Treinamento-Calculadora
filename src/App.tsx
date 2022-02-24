import Calc from "./components/Calc";
function App() {
  return (
    <div className="App">
      <Calc title={process.env.REACT_APP_TITLE || '<Título de sua escolha>'}/>
    </div>
  );
}

export default App;
