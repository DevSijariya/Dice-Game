import './App.css';
import Button from './components/Button/Button';
import Game_Page from './components/game_page/Game_Page';
import Home from './components/home/home';
import { useState } from 'react';
function App() {
  // Create a state variable to keep track of the current component
  const [currentComponent, setCurrentComponent] = useState('home');

  // Function to change the component on button click
  const handleButtonClick = () => {
    setCurrentComponent('game_page'); // Change to 'about' or whichever component you want
  };

  return (
    <div className="container">
      {currentComponent === 'home' && <Home onButtonClick={handleButtonClick} />}
      {currentComponent === 'game_page' && <Game_Page/>} 
    </div>
  );
}
// function App() {
//   return(
//     <div className="container">
//     <Game_Page/>
//     </div>
//   );
// }

export default App;
