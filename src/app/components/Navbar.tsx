import React from 'react'

const Navbar = () => {
  return (

      <nav className='flex bg-blue-600 h-10 justify-around items-center'>
        <div className='bg-black h-2 w-10'></div>
            <div className='bg-orange-600 h-2 w-20'></div>
            <div>
            <ul className='flex'>
                    <li className='bg-blue-300 h-2 w-10'></li>
                    <li className='bg-pink-400 h-2 w-10'></li>
                    <li className='bg-yellow-300 h-2 w-10'></li>
                    <li className='bg-green-400 h-2 w-10'></li>
                    <li className='bg-orange-400 h-2 w-10'></li>
                </ul>
            </div>
    
      </nav>

  )
}

export default Navbar

