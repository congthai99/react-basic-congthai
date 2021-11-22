import logo from './logo.svg';
import './App.scss';
import Mycomponent from './example/MyComponent';
/**
 * 2 components : class component / function component (function, arrow)
 * JSX
*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with Reactjs and Cong thai
        </p>
        
        <Mycomponent/>
      </header>
    </div>
  );
}

export default App;
