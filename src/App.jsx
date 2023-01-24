import React from 'react'
import NavBarContainer from './components/nav/NavBarContainer';
import Router from './components/Router';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBarContainer/>
      <Router />
      <h1>Floating Button with HTML</h1>
      <a href="http://www.google.com" class="material-icons" id="contact-side-button">add</a>
      <Footer />
    </div>
  )
}

export default App