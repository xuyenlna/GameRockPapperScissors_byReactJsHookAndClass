import Player from "./components/Player";
import Result from "./components/Result";
import Computer from "./components/Computer";

function App() {
  return (
    <div className="App">
      <div className="game container-fluid">
        <div className="row">
          <Player />
          <Result />
          <Computer />
        </div>
      </div>
    </div>
  );
}

export default App;
