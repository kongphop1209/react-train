import './App.css';
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className='wrapper-show'>
        <Wrapper></Wrapper>
      </div>
      <div className='sized-box-of-wrapper'></div>
      {/* <div className='categories-show'>
        <Categories></Categories>
      </div>
      <div className='sized-box-of-cate'></div> */}
    </div>
  );
}

export default App;
