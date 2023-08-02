import "./styling.css";
import { useState } from 'react';

export default function TicTacToe(){
    let turnTracker = 0; 
    let letters = ["X","O"]
    let blankBoard = [1,2,3,4,5,6,7,8,9];
    const [turnMessage, setTurnMessage] = useState("Player 1's Turn");
    const [gameBoard, setGameBoard] = useState(blankBoard);
    
        const handleClick = (space) => {            
           if(turnTracker%2===0){
            //setGameBoard2(letters[0]); //x
            gameBoard[space] = letters[0];
            setTurnMessage("Player 2's Turn");
           }else{
            //setGameBoard2(letters[1]); //o
            gameBoard[space] = letters[1];
            setTurnMessage("Player 1's Turn");
           }
           turnTracker = turnTracker+1;
        }
    
    
    return (
        <div>
            <header>
                <h1>TicTacToe Function Goes Here</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th colspan="3">{turnMessage}</th>
                            </tr>
                        </thead>
                        <tbody id="gameBoard">
                            <tr id="row1">
                                <td onClick={() => handleClick(0)} id="row1-column1" class ="column1 row1">{gameBoard[0]}</td>
                                <td onClick={() => handleClick(1)} id="row1-column2" class ="column2 row1">{gameBoard[1]}</td>
                                <td onClick={() => handleClick(2)}id="row1-column3" class ="column3 row1">{gameBoard[2]}</td>
                            </tr>
                            <tr id="row2">
                                <td onClick={() => handleClick(3)} id="row2-column1" class ="column1 row2">{gameBoard[3]}</td>
                                <td onClick={() => handleClick(4)} id="row2-column2" class ="column2 row2">{gameBoard[4]}</td>
                                <td onClick={() => handleClick(5)} id="row2-column3" class ="column3 row2">{gameBoard[5]}</td>
                            </tr>
                            <tr id="row3">
                                <td onClick={() => handleClick(6)} id="row3-column1" class ="column1 row3">{gameBoard[6]}</td>
                                <td onClick={() => handleClick(7)} id="row3-column2" class ="column2 row3">{gameBoard[7]}</td>
                                <td onClick={() => handleClick(8)} id="row3-column3" class ="column3 row3">{gameBoard[8]}</td>
                            </tr>
                            <tr>
                                <th colspan="3">{gameBoard}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </header>    
        </div>
    );
}

/*
win case: 2 diagonal, 3 row, 3 column
8 win cases

tie if all spaces full and no win case 

2diagonal: 
r1c1, r2c2, r3c3
r1c3, r2c2, r3,c1

3row:
r1c1, r1c2, r1c3
r2c1, r2c2, r2c3
r3c1, r3c2, r3c3

3 column:
r1c1, r2c1, r3c1
r1c2, r2c2, r3c2
r1c3. r2c3, r3c3
*/