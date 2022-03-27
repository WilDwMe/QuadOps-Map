import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './modules/navbar';
import Home from './pages/home';
import Wifi from './pages/heatmap';
import About from './pages/about';
import Boom from './pages/boomstarter';
import { WifiRealtime } from './pages/wifi-realtime';
import { Footer } from './modules/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} exact element={<Home />} />
        <Route path={'/heatmap'} element={<Wifi />} />
        <Route path={'/wifi-realtime'} element={<WifiRealtime />} />
        <Route path={'/boom'} element={<Boom />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
