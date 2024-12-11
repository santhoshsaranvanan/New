import React from 'react'
import Navbar from './Components/Navbar'
import Newsboard from './Components/Newsboard'
import { useState } from 'react'


const App = () => {
  const[category,setCategory]=useState("general");
  return (
    <div>
          <Navbar setCategory={setCategory}/> 
          <Newsboard category={category}/>

          <div className='bg-dark text-danger p-5'>
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link" href="https://www.linkedin.com/in/santhosh-s-720979265/">
        <img src="linkedin.png" alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
        <span className='text-light ms-2'>LinkedIn</span>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://www.instagram.com/its_choto?igsh=MWUyYWVuMmM1czZvcQ==">
        <img src="instagram.png" alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
        <span className='text-light ms-2'>Instagram</span>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://github.com/santhoshsaranvanan">
        <img src="git.png" alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
        <span className='text-light ms-2'>GitHub</span>
      </a>
    </li>
     
  </ul>
</div>

                   




    </div>
  )
}

export default App