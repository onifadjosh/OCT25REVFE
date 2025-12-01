import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { SidebarUnfoldableExample } from '../components/Sidebar'

const Layout = () => {
  return (
    <div className='d-flex w-100'>
        {/* <div className='bg-success vh-100 fixed d-flex flex-column gap-4 align-items-lg-center text-center  /justify-content-center' style={{flexBasis:"20%", }}>
            <Link to={'/home'}  className='text-light text-decoration-none'>Home</Link>
            <Link to={'/todo'}  className='text-light text-decoration-none'>Todo</Link>
            <Link to={'/product'}  className='text-light text-decoration-none'>Product</Link>
        </div> */}

        <SidebarUnfoldableExample/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout