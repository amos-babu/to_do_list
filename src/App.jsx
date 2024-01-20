import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoform from './Todoform';


function App() {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 p-3'>
          <h1 className='text-center'>Things To Do</h1> 
          <Todoform/>

         </div>
      </div>
    </div>
  );
}

export default App;
