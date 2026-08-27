import React from 'react'
import { motion } from 'framer-motion'

const Button = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:to-orange-600 transition-colors duration-300 cursor-pointer'
    >
      {props.content}
    </motion.button>
  )
}

export default Button