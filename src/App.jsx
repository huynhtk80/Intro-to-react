// import logo from './logo.svg';
import './App.css';
import Title, { LittlestComponent, SecondLittlestComponent } from './title.js'
import { useState } from 'react';

// const url = "https://www.google.com"
//const url2 = "https://reactjs.org"

function App() {
  const [count, setCount] = useState(0);
  let testcount = 0;
  return (
    <div className="App">
      <header className="App-header">
        {count}
        <Title />
        <LittlestComponent message={"Hi C9!!"} />
        <p> You Clicked {count} Times</p>
        <SecondLittlestComponent />
        <button onClick={()=>setCount(count+1)}>Click Me</button>
        <button onClick={()=>{testcount = testcount +1; console.log(testcount);console.log(count)}}>Test Click Me</button>
        <p> You Clicked {testcount} Times</p>
        
      </header>
      
    </div>
  );
}

export default App;
