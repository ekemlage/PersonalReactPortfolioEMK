import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './components/navBar';
import TicTacToe from './components/ticTacToe';
import Home from './components/home';
import ShoeButton from './components/navBar';


function App() {
  let selectedProgram = "Home";
  return (
    <div>
      <Header />
      <ShoeButton />
    </div>
  );
}

export default App;


