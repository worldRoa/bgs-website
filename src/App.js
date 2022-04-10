import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountPage from './pages/signing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
