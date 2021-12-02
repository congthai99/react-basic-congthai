import logo from './logo.svg';
import './App.scss';
import Mycomponent from './example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from './Users/ListUser'
import DetailUser from './Users/DetailUser';


import Home from './example/Home'
import Nav from './Nav/Nav'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

/**
 * 2 components : class component     / function component (function, arrow)
 * >>>>>>>>>>>>>: statefull component / stateless component
 * JSX
*/


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />

        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <Mycomponent/>
          </Route>
          <Route path="/user" exact>
            <ListUser/>
          </Route>
          <Route path="/user/:id">
            <DetailUser/>
          </Route>
        </Switch>
        
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
