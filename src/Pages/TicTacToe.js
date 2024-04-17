import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './TicTacToe.css';

export default function TicTacToe() {
    const [platform, setplatform] = useState(['','','','','','','','',''])   
   let navigate =  useNavigate()
    const [flag, setflag] = useState(true) 

    const handleClick = (index) => {
        const newBoard = [...platform];
        if (calculateWinner(newBoard) || newBoard[index]) {
          return;
        }
        newBoard[index] = flag ? 'X' : 'O';
        setplatform(newBoard);
        setflag(!flag);
      };

      

    const calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; 
          }
        }
        return null; 
      };

      const isBoardFull = () => {
        return platform.every((square) => square !== '');
      };
      
      const winner = calculateWinner(platform);
      const isDraw = !winner && isBoardFull();
      let status;
if (winner) {
  status = `Winner: ${winner}`;
} else if (isDraw) {
  status = 'Draw game!';
} else {
  status = `Next player: ${flag ? 'X' : 'O'}`;
}

     

    
  return (
    <>
    <div className='fullbodytic'>
    <p className='title'>Tic Tac Toe</p>
    
    <div className="status">{status}</div>
    <div className='maindiv'>
        {
            platform.map((item,index)=>(
                <button className='btnstyle' onClick={()=>handleClick(index)}>{item}</button> 
            ))
        }
        


    </div>
    </div>
    </>
  )
}