import React from 'react'
import Router from './components/Router';
import Nav from './components/nav/Nav';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  )
}

export default App