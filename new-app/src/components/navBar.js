import "./styling.css";
import TicTacToe from "./ticTacToe.js";
import Home from "./home.js";
import { useState } from 'react';

export default function ShoeButton() {
    const [Feature, setFeature] = useState(<Home />);

    const handleTicTacToe = () => {
       setFeature(<TicTacToe />);
    }

    const handleHome = () => {
        setFeature(<Home />);
     }

    return (
       <div>
            <div id="navBar">
                <button onClick={handleHome}>Home</button>
                <button onClick={handleTicTacToe}>TicTacToe</button>
            </div>
            <div id="feature">
                {Feature}
            </div>
       </div>
    );
 }

 





