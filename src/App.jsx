import logo from './logo.svg';
import './App.css';
import Title, { LittlestComponent, SecondLittlestComponent } from './title.js'

const url = "https://www.google.com"
//const url2 = "https://reactjs.org"

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Title />
        <LittlestComponent message={"Hi C9!!"} />
        <SecondLittlestComponent />
      </header>
    </div>
  );
}

export default App;
