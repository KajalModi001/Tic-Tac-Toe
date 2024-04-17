import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicTacToe from './Pages/TicTacToe';
import Header from './Components/Header';

function App() {
  return (
  <>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='tictactoe' element={<TicTacToe/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
