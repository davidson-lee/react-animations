import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'

import { motion } from 'framer-motion'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <div class="menu-toggle" onClick={() => { setIsOpen(!isOpen) }} >
        { isOpen ? "X" : "O" }
      </div>
      <Menu isOpen={isOpen} />
      <header className="App-header">
        <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} src={logo} className="App-logo" alt="logo" />
        <motion.p animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: "10vh" }} >
          Animations Test!
        </motion.p>
      </header>
    </div>
  );
}

export default App;
