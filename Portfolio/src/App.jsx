// import { useState } from 'react'
// importing App.css for some styling

import { Outlet } from "react-router-dom"
import Nav from './components/NavTab'

// importing a banner to be at to top of every page under the page break
import Banner from './components/ImgBanner'

function App() {
 
  // using Nav and Outlet for navigation between pages.
  return (
    <div>
      <header className='d-flex m-0 p-0'>
        <div className='d-flex me-auto align-items-center'>
          <p className='ps-4 my-0'><h1>Miguel Maldonado</h1></p>
        </div>
        <Nav />
      </header>
      <div>
          <Banner />
        <main className="mx-3 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
