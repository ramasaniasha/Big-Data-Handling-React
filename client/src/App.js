import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Faker from './pages/Faker';
import Pagination from './pages/Pagination';
 
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' exact element={<Home/>}/> */}
      {/* <Route path='/' exact element={<Faker/>}/> */}
      <Route path='/' exact element = {<Pagination/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
