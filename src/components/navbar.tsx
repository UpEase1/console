import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='w-full flex p-8 justify-between '>
        <div>
            <Link href='/' className=' text-2xl'>UpEase</Link>
        </div>
        <ul className=' text-2xl flex flex-col md:flex-row gap-8 '>
            <li className='p-2.5 hover:bg-blue-100 hover:rounded-xl'><Link href='/' className=''>Copilot</Link></li>
            <li className='p-2.5 hover:bg-blue-100 hover:rounded-xl'><Link href='routines' className=''>Routines</Link></li>
            <li className='p-2.5 hover:bg-blue-100 hover:rounded-xl'><Link href='students' className=''>Students</Link></li>
            <li className='p-2.5 hover:bg-blue-100 hover:rounded-xl'><Link href='courses' className=''>Courses</Link></li>
            <li className='p-2.5 hover:bg-blue-100 hover:rounded-xl'><Link href='api/auth/signout' className=''>Logout</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar