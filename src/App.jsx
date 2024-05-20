import './App.css';
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper';
import Categories from './components/Categories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login_page';  // Make sure this path is correct

function App() {
  return (
    <Router>
      <NavBar />
      <div className='wrapper-show'>
        <Wrapper />
      </div>
      <Routes>
        <Route path="/login_page" element={<LoginPage />} />
        {/* Add other routes here */}
      </Routes>
      <div className='sized-box-of-wrapper'></div>
      <div className='categories-show'>
        <Categories />
      </div>
    </Router>
  );
}

export default App;
