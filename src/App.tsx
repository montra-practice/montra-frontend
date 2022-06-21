import {
  BrowserRouter,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Route } from 'react-router';
import HomeRouter from '@/pages/home/router';
import LandingRouter from '@/pages/landing/router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />}/>
        {HomeRouter}
        {LandingRouter}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
