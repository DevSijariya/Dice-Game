import styles from "./Button.module.css";
import React, { useState } from 'react';

const Button = ({onClick , text,isoutline}) => {
  return (
    <div className={styles.container}>
        <button className={isoutline ? styles.secondary_btn : styles.primary_btn}  onClick={onClick}>
            {text}
        </button>
    </div>
  )
}


const Number = ({ text, isActive, onClick }) => {
    const bgColor = isActive ? 'black' : 'white'; // Black if active, else white
    const textColor = isActive ? 'white' : 'black'; 
    // Function to change background color on click
   
  
    return (
        <div
          className={styles.box}
          onClick={onClick} // Call the click handler passed as prop
          style={{ backgroundColor: bgColor, color: textColor }} // Apply styles dynamically
        >
          <p>{text}</p>
        </div>
      );
  };
  
  // Export both components
export default Button;
export { Number };