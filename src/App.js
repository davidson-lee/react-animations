import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'

import { motion } from 'framer-motion'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [bg, setBg] = useState("coffee")
  const [isPlaying, setIsPlaying] = useState(true)
  const colorList = ["coffee", "cake", "strawberry"]

  const prevImg = useRef();

  useEffect(() => {
    if (isPlaying) {

      const timeout = setTimeout(() => {

        handleNext()
      }, 3000)

      return () => {
        clearTimeout(timeout)
      }
    }
  })

  const getTextColor = (color) => {
    switch(color) {
      case "coffee":
        return "rgb(240,240,190)"
      case "strawberry":
        return "rgb(255,230,230)"
      case "cake":
        return "rgb(0,255,0)"
      case "white":
        return "rgb(255,255,255)"
      default:
        return "rgb(0,0,255)"
    }
  }

  const getBgColor = (color) => {
    switch(color) {
      case "coffee":
        return "https://www.shambhalaschool.org/wp-content/uploads/2017/11/pp-hot-coffee-rf-istock.jpg"
      case "cake":
        return "https://foodmeanderings.com/wp-content/uploads/2019/10/Chocolate-Mayonnaise-Cake-Recipe.jpg"
      case "strawberry":
        return "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1600x1066/gallery-1432670584-strawberry-facts8b.jpg"
      default:
        return "https://www.shambhalaschool.org/wp-content/uploads/2017/11/pp-hot-coffee-rf-istock.jpg"
    }
  }

  const handlePrev = () => {
    const currentIndex = colorList.indexOf(bg)
    const lastIndex = colorList.length - 1



    if (currentIndex === 0) {
      setBg(colorList[lastIndex])
    } else {
      setBg(colorList[currentIndex - 1])
    }
  }

  const handleNext = () => {
    const currentIndex = colorList.indexOf(bg)
    const lastIndex = colorList.length - 1

    if (currentIndex === lastIndex) {
      setBg(colorList[0])
    } else {
      setBg(colorList[currentIndex + 1])
    }
  }

  const variants = {
    active: {
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    inactive: {
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  const progressVariants = {
    full: {
      width: '100%',
      transition: {
        duration: 3,
        ease: 'linear'
      }
    },
    empty: {
      width: '0%',
      transition: {
        ease: 'easeOut'
      }
    }
  }

  const isActive = (color) => {
    return bg === color ? "active" : "inactive"
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
        variants={variants}
        animate={bg}
        initial={"blue"}
        className="App-header"
      >

        {
          colorList.map(color => {
            return (
              <React.Fragment>
                <motion.img
                  src={getBgColor(color)}
                  key={color}
                  variants={variants}
                  animate={isActive(color)}
                  className="bg-img"
                >
                </motion.img>
                <div className="progress-container">
                  <motion.div
                    variants={progressVariants}
                    animate={(bg === color && isPlaying) ? "full" : "empty"}
                    initial={"empty"}
                    className="progress"
                  />
                </div>
              </React.Fragment>
            )
          })
        }


        <div>
          <h2 onClick={handlePrev}>Prev</h2>
          <h2 onClick={handleNext}>Next</h2>
          <h2 onClick={() => { setIsPlaying(!isPlaying)}}>
            { isPlaying ? "PAUSE" : "PLAY" }
          </h2>
        </div>
      </motion.header>
    </div>
  );
}

export default App;
