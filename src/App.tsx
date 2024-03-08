import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Game from './Game';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game/:gameId' element={<Game/>}/>
      </Routes>
    </>
  );
}

export default App;
