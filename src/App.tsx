import {
  HashRouter,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Route } from 'react-router';
import HomeRouter from '@/pages/Home/router';
import LandingRouter from '@/pages/Landing/router';

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
