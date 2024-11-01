import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Tools from './pages/tools';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}>
        <Route index element={<About />}/>
        <Route path='/tools' element={<Tools />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
