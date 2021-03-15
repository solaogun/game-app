import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import BeginGame from './component/begin/begin.component'
import ResultPage from './component/result/result.component'

function App() {


  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/Begin' component={BeginGame} />
        <Route exact path='/result' component={ResultPage} />
      </Switch>
    </div>
  );
}



export default App;
