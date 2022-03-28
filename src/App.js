import "./App.css";
import SayMyName from "./components/SayMyName";
import Person from "./components/Person";
import Phrase from "./components/Phrase";
import List from "./components/List";

function App() {
  const nome = "Maria";
  return (
    <div className="App">
      <Phrase/>
      <SayMyName nome="Daniel" />
      <SayMyName nome="Joao" />
      <SayMyName nome={nome} />
      <Person
        foto="https://via.placeholder.com/150"
        nome="Larissa"
        idade="18"
        profissão="Streamer"
      />
      <List />
    </div>
  );
}

export default App;
