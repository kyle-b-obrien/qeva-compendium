import './App.css';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchBasics } from './slices/basicsSlice';
import ScrollUp from './utils/scrollUp';
import Aside from './components/Aside';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ToolPage from './pages/ToolPage';
import BasicPage from './pages/BasicPage';
import GemPage from './pages/gems/GemPage';
import DivPage from './pages/divine/DivPage';
import RacePage from './pages/RacePage';
import DRacePage from './pages/DRacePage';
import ClassPage from './pages/ClassPage';
import CharPage from './pages/CharPage';
import FaunaPage from './pages/FaunaPage';
import FloraPage from './pages/FloraPage';
import HistPage from './pages/HistPage';
import LocPage from './pages/LocPage';
import MapPage from './pages/MapPage';
import BelowSpace from './components/BelowSpace';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBasics());
  }, [dispatch]);
  
  return (
    <div className='App'>
      <Aside />
      <section id="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tools' element={<ToolPage />} />
          <Route path='/about' element={<BasicPage />} />
          <Route path='/gems/*' element={<GemPage />} />
          <Route path='/divine/*' element={<DivPage />} />
          <Route path='/races/*' element={<RacePage />} />
          <Route path='/dark-races/*' element={<DRacePage />} />
          <Route path='/classes/*' element={<ClassPage />} />
          <Route path='/characters/*' element={<CharPage />} />
          <Route path='/fauna/*' element={<FaunaPage />} />
          <Route path='/flora/*' element={<FloraPage />} />
          <Route path='/history/*' element={<HistPage />} />
          <Route path='/locations/*' element={<LocPage />} />
          <Route path='/map' element={<MapPage />} />
        </Routes>
        <BelowSpace />
        <Fragment>
          <ScrollUp />
        </Fragment>
      </section>
    </div> 
  );
}

export default App;