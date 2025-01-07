import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-red-200 text-5xl mb-2'>Users</h1>
      <p className='mb-2 text-zinc-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, quos voluptate voluptatem nesciunt dolore labore sit hic modi veniam corporis fugiat qui quisquam, accusantium nemo saepe explicabo nisi quasi expedita nostrum aliquid!</p>


      <div className='flex w-1/2 flex-col mt-5'>
        <Link className='p-3 bg-red-200 text-xl mb-3 hover:bg-red-400' to="/user/divya">Divya</Link>
        <Link className='p-3 bg-red-200 text-xl mb-3 hover:bg-red-400' to="/user/priya">Priya</Link>
        <Link className='p-3 bg-red-200 text-xl mb-3 hover:bg-red-400' to="/user/harry">Harry</Link>
      </div>

      <button className='text-white p-3 bg-zinc-400 mb-3'>Explore More</button>
      <hr />
      <Outlet/>
    </div>
  )
}

export default Users