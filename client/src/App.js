import './App.css';
import Main from './views/Main'
import Detail from './views/Details';
import Update from './views/update';
import {Routes, Route, Link} from 'react-router-dom'



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path ='/' element = {<Main/>}/>
          <Route path='/item/:id' element = {<Detail/>}/>
          <Route path='/inventory/edit/:id' element={<Update/>}/>
        </Routes>
    </div>
  );
}

export default App;
