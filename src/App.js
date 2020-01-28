import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'

import { motion } from 'framer-motion'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [bg, setBg] = useState("green")
  const colorList = ["red", "blue", "green"]

  const getTextColor = (color) => {
    switch(color) {
      case "blue":
        return "rgb(0,0,255)"
      case "red":
        return "rgb(255,0,0)"
      case "green":
        return "rgb(0,120,0)"
      case "white":
        return "rgb(255,255,255)"
      default:
        return "rgb(0,0,255)"
    }
  }

  const getBgColor = (color) => {
    switch(color) {
      case "blue":
        return "#282c34"
      case "red":
        return "rgb(100,50,50)"
      case "green":
        return "rgb(50,100,50)"
      default:
        return "#282c34"
    }
  }

  const getVariants = () => {
    const variants = {
      active: {
        background: "rgb(255,255,255)",
        color: getTextColor(bg),
        scale: 1.1,
        transition: {
          duration: 1
        }
      }
    }

    colorList.forEach(color => {
      variants[color] = {
        background: getBgColor(color),
        scale: 1,
        color: getTextColor("white"),
        transition: {
          duration: 1
        }
      }
    })

    return variants
  }

  const isActive = (color) => {
    return bg === color ? "active" : color
  }

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="App">
      <div className="menu-toggle" onClick={() => { setIsOpen(!isOpen) }} >
        { isOpen ? "Close" : "Open" }
      </div>

      <Menu isOpen={isOpen} />
      <motion.header
        variants={getVariants()}
        animate={bg}
        initial={"blue"}
        className="App-header"
      >

        {
          colorList.map(color => {
            return (
              <motion.p
                key={color}
                variants={getVariants()}
                animate={isActive(color)}
                onClick={() => { setBg(color) }}
                className="btn"
              >
                {capitalize(color)}
              </motion.p>
            )
          })
        }

      </motion.header>
    </div>
  );
}

export default App;
