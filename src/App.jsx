import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Notes from './components/Notes';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Info />
      <Navbar />
      <Notes />
    </div>
  );
}

export default App;
