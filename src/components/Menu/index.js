import React, { useState } from 'react'
import { motion } from 'framer-motion'

import './styles.css'

const Menu = ({ isOpen }) => {

  const menu = {
    open: {
      opacity: 1,
      y: 0,
      x: 0,
      borderRadius: '0 0 0 0',
      transition: {
        when: 'beforeChildren',
        ease: 'circIn'
      }
    },
    closed: {
      opacity: 0,
      y: "-100%",
      x: '-100%',
      borderRadius: '0 0 50% 50%',
      transition: {
        ease: 'circOut'
      }
    }
  }

  const items = {
    open: {
      transition: {
        staggerChildren: 0.1
      }
    },
    closed: {

    }
  }

  const item = {
    open: {
      opacity: 1,
      y: 0
    },
    closed: {
      opacity: 0,
      y: '-20%'
    }
  }

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      variants={menu}
      className="nav"
    >
      <motion.div variants={items} className="menu-item-container">
        <motion.h3 variants={item}>Menu Item 1</motion.h3>
        <motion.h3 variants={item}>Menu Item 2</motion.h3>
        <motion.h3 variants={item}>Menu Item 3</motion.h3>
        <motion.h3 variants={item}>Menu Item 4</motion.h3>
        <motion.h3 variants={item}>Menu Item 5</motion.h3>
      </motion.div>
    </motion.div>
  )
}

export default Menu
