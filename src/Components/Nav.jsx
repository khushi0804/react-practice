import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav className="bg-gray-300 p-4">
        <div className="flex justify-center space-x-8">
          <NavLink
            to="/"
            className=" text-lg font-medium"
            style={(e) => {
              return {
                color: e.isActive ? "red" : "",
                fontWeight: e.isActive ? "Bold" : ""
              }
            }}
          >

            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-lg font-medium"
          >
            About
          </NavLink>
          <NavLink
            to="/User"
            className=" text-lg font-medium"
          >
            Users
          </NavLink>
          <NavLink
            to="/Products"
            className="text-lg font-medium"
          >
            Products
          </NavLink>
          <NavLink
            to="/show"
            className="text-lg font-medium"
          >
            Show
          </NavLink>
          <NavLink
            to="/pizza"
            className="text-lg font-medium"
          >
            Pizza
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Nav