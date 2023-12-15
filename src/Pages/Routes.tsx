import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Results from './Results';

const CustomRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
             <Route path='/search' element={<Results/>} />
              <Route path='/image' element={<Results/>} />
               <Route path='/news' element={<Results/>} />
                <Route path='/videos' element={<Results/>} />
        </Routes>
    </div>
  )
}

export default CustomRoutes;