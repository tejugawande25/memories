import logo from './logo.svg';
import './App.css';
import Login from './components/auth/login'
import { BrowserRouter, Route,Routes
} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Home from './components/home/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={ <Login/>} path='/login' />
      <Route element={ <Dashboard />} path='/dashboard' />
      <Route element={ <Home />} path='/' />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
