import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const fullname = useSelector((state)=>state.fullname)
  return (
    <div>
        <h1 className='fs-1 font-monospace text-success'>Welcome {fullname}</h1>
    </div>
  )
}

export default Home