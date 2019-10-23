import React from 'react';

import './styles.css'

import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './pages/Main'

function App () {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Main />
    </div>
  );
}


export default App;
