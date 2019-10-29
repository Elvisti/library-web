import React from 'react';

import './styles.css';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './pages/Main';
import Footer from './components/Footer';

function App () {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Main />
      <Footer />
    </div>
  );
}


export default App;
