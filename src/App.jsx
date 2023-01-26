import React from 'react'
import NavBarContainer from './components/nav/NavBarContainer';
import {useNavigate} from 'react-router-dom';
import Router from './components/Router';
import Footer from './components/footer/Footer';

const App = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  }

  return (
    <div className="App">
      <NavBarContainer/>
      <Router />
      <button className="material-icons floating-btn" onClick={navigateToContact}>mail</button>
      <Footer />
    </div>
  )
}

export default App