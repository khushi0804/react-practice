import React from 'react'
import Home from '../Components/Home'
import About from '../Components/About'
import Product from '../Components/Product'
import Users from '../Components/Users'
import { Route, Routes } from 'react-router-dom'
import UserDetails from '../Components/UserDetails'
import Show from '../Components/Show'
import PizzaComponent from '../Components/PizzaComponent'
function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/show' element={<Show />} />
        <Route path='/Products' element={<Product />} />
        <Route path='/pizza' element={<PizzaComponent />} />
        <Route path='/User' element={<Users />}>
          <Route path='/User/:name' element={<UserDetails />} />

        </Route>
        {/* <Route path='/User' element={<Users />} />
        <Route path='/User/:name' element={<UserDetails />} /> */}

      </Routes>
    </div>
  )
}
export default Routing