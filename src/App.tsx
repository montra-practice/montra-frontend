import {
  HashRouter,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Route } from 'react-router';
import HomeRouter from '@/pages/home1/router';
import LandingRouter from '@/pages/landing1/router';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />}/>
        {HomeRouter}
        {LandingRouter}
      </Routes>
      
    </HashRouter>
  );
}

export default App;
