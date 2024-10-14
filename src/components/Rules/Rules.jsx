import styles from "./rules.module.css";
const Rules = () => {
  return (
    <div className={styles.rules}>
                    <h1>How to Play Dice Game</h1>
                    <p>Select any number</p>
                    <p>Click on dice image</p>
                    <p>
                        After clicking on the dice, if the selected number is equal to the dice number, you will get the same points as the dice.
                    </p>
                    <p>If you make a wrong guess, then 2 points will be deducted.</p>
                </div>
  )
}

export default Rules