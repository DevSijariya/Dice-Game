import Button, { Number } from "../Button/Button";
import Rules from "../Rules/Rules";
import styles from "./game_page.module.css";
import { useState } from "react";

const Game_Page = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 6) + 1
  ); // Initial random number

  const [activeIndex, setActiveIndex] = useState(null); // Track the active Number index
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const handleNumberClick = (index) => {
    setActiveIndex(index);
    // console.log(`Selected Number: ${index + 1}`);
    setSelectedNumber(index + 1); // Update active index on click
  };

  const rollDice = () => {
    
    if (selectedNumber === null){
        alert("Please Select a number first");
    }
    else{
        const newNumber = Math.floor(Math.random() * 6) + 1; // Generate a new random number between 1 and 6
    setRandomNumber(newNumber);
    // Show the result after a brief delay
    setTimeout(() => {
      const resultMessage = result(newNumber, selectedNumber);
       // Show the result alert
    }, 500); // Delay of 100 milliseconds
}
  };

  const result = (rolledNumber, index) => {
    if (rolledNumber === index) {
      setScore((prevScore) => prevScore + rolledNumber);
      return "You Win";
    } else {
      setScore((prevScore) => prevScore - 2);
      return "You Lose";
    }
  };
  const resetScore = () => {
    setScore(0); // Reset the score to 0
  };
  const toggleRules = () => {
    setShowRules(!showRules); // Toggle the visibility of the rules
};

  return (
    <div className={styles.block}>
      <div className={styles.nav}>
        <div className={styles.Points}>
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className={styles.container}>
        {selectedNumber === null && ( // Show this message if no number is selected
            <span>You have not selected any number</span>
          )}

          <div className={styles.content}>
            {["1", "2", "3", "4", "5", "6"].map((text, index) => (
              <Number
                var2={index}
                key={index}
                text={text}
                isActive={activeIndex === index} // Check if this Number is active
                onClick={() => handleNumberClick(index)} // Pass the click handler
              />
            ))}
          </div>
          <p>Select Number</p>
        </div>
      </div>
      <div className={styles.imgcontent}>
        <img
          src={`./images/${randomNumber}.png`}
          alt="dice"
          onClick={rollDice}
        />
        <h3>Click On the Dice To Roll</h3>
        <Button text="Reset Score" isoutline={true} onClick={resetScore} />
        <Button text="Show Rules" onClick={toggleRules} />
      </div>
      {showRules && ( 
                <Rules/>
            )}
    </div>
  );
};

export default Game_Page;
