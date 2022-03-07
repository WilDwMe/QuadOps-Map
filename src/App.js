import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './modules/Navbar';
import Home from './pages/home';
import Wifi from './pages/wifi';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} exact element={<Home />} />
        <Route path={'/wifi'} element={<Wifi />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
