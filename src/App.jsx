import React from 'react'
import NavBarContainer from './components/nav/NavBarContainer';
import Router from './components/Router';

const App = () => {
  return (
    <div className="App">
      <NavBarContainer/>
      <Router />
    </div>
  )
}

export default App