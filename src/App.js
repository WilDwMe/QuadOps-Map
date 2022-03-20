import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './modules/navbar';
import Home from './pages/home';
import Wifi from './pages/wifi';
import About from './pages/about';
import { WifiRealtime } from './pages/wifi-realtime';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} exact element={<Home />} />
        <Route path={'/wifi'} element={<Wifi />} />
        <Route path={'/wifi-realtime'} element={<WifiRealtime />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
