import "./styling.css";
import { useState } from 'react';

export default function TicTacToe(){
    const [turnTracker, setTurnTracker] = useState(0); 
    let letters = ["X","O"]
    let blankBoard = ["","","","","","","","",""];
    const [turnMessage, setTurnMessage] = useState("Player 1's Turn");
    const [gameBoard, setGameBoard] = useState(blankBoard); 
    const [message, setMessage] = useState("");
    let winArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const [won, setWon] = useState("false");
    
    let gradeBoard = function(gameBoard){       
        for(let i=0; i<winArray.length; i++){
            let a = winArray[i][0];
            let b = winArray[i][1];
            let c = winArray[i][2];
            if(gameBoard[a]!="" && gameBoard[a]===gameBoard[b] && gameBoard[a]===gameBoard[c]){
                if(gameBoard[a]===letters[0] && won ==="false"){
                    setMessage(<div><div>Player 1 Wins!</div><button onClick={handleNewGame}>New Game?</button></div>);
                    setWon("true");
                    setTurnMessage("");
                }
                if(gameBoard[a]===letters[1] && won ==="false"){
                    setMessage(<div><div>Player 2 Wins!</div><button onClick={handleNewGame}>New Game?</button></div>);
                    setWon("true");
                    setTurnMessage("");
                }   
            }
        }
        if(turnTracker===9 && won==="false"){
            setMessage(<div><div>Tie Game!</div><button onClick={handleNewGame}>New Game?</button></div>);
        }
    }

    const handleNewGame = () => {
        setGameBoard(blankBoard);
        setMessage("");
        setTurnTracker(0);
        setTurnMessage("Player 1's Turn")
        setWon("false");
    }

    const handleClick = (space) => {            
        if(gameBoard[space]==="" && won==="false"){ 
            if(turnTracker%2===0){ 
                gameBoard[space] = letters[0]; //x
                setTurnMessage("Player 2's Turn");
                setMessage("");
                gradeBoard(gameBoard);
            }else{
                gameBoard[space] = letters[1]; //o
                setTurnMessage("Player 1's Turn");
                setMessage("");
                gradeBoard(gameBoard);
            }   
            setTurnTracker(turnTracker+1);
        }else{
            if(won!="true"){
                setMessage("Choose a different space");
            }
        }
    }
    
    
    return (
        <div>
            <table>
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
                        <th colspan="3">{turnMessage}</th>
                    </tr>
                    <tr>
                        <th colspan="3">{message}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}