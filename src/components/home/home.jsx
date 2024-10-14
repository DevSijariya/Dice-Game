import Button, { Number } from "../Button/Button";
import styles from "./home.module.css";
const Home = ({ onButtonClick }) => {
  return (
    <div className={styles.home}>
        <div className={styles.left_content}>
            <img src="./images/dices 1.png"/>
        </div>
        <div className={styles.right_content}>
            <h1>Dice Game</h1>
            <Button onClick={onButtonClick} text="Play Now"/>
            
        </div>
    </div>
  )
}

export default Home