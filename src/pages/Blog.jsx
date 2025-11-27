import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
    let {username} = useParams()
    // console.log(params)



  return (
    <div>Blog for {username}</div>
  )
}

export default Blog