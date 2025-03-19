import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../context/Context'

function Users() {
  const { users, setusers } = useContext(UserContext);
  // console.log(x);

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

      <h1 className='text-2xl'>User List</h1>
      <div className="w-3/4 mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {users.map((u, index) => (
    <div key={index} className="bg-white shadow-lg rounded-xl p-2 border border-gray-200">
      <h1 className="text-sm font-bold text-blue-600"> @{u.username} </h1>
      <h2 className="text-lg font-semibold text-gray-800"> {u.name} </h2>
      <p className="text-gray-600">
        📞 <span className="font-medium">{u.phone}</span>
      </p>
      <p className="text-gray-500">
        📍 {u.address.street}, {u.address.city}
      </p>
    </div>
  ))}
</div>


      <Outlet />
    </div>
  )
}

export default Users