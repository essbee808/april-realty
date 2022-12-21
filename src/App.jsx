import React from 'react'
import NavBarContainer from './components/nav/NavBarContainer';
import Router from './components/Router';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBarContainer/>
      <Router />
      <Footer />
    </div>
  )
}

export default App