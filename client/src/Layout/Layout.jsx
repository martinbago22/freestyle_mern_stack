import { useState } from 'react';
import './Layout.css'
import { Outlet } from 'react-router-dom';
import Event from '../components/Event';



function Layout() {

  return (
      <div className='Layout'>
        <nav>
          <ul>
            <li className='Home'>KAKI</li>
          </ul>
        </nav>
        <Outlet />
        <Event event={event}></Event>
       </div>
  )
}

export default Layout
