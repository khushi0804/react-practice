import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import userImages from '../Data/userImages'

function UserDetails() {
  const { name } = useParams()
  const navigate = useNavigate()

  const goBackHandle = () => {
    navigate('/User')
  }
  const userImage = userImages[name]


  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-red-200 text-5xl mb-2'>User Detail</h1>
      <h1 className='text-3xl mb-2'>Hey! {name} </h1>
      <img src={userImage} alt={name} className='w-32 h-32 rounded-full mb-4 object-cover' />
      <p className='mb-2 text-zinc-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, quos voluptate voluptatem to veritatis facilis voluptas, eum, maxime reprehenderit voluptate in vero non tenetur ab nam nisi quo perferendis labore quasi id?</p>
      <button onClick={goBackHandle} className='text-white p-3 bg-sky-500 rounded-md'>Go Back</button>
    </div>
  )
}

export default UserDetails