// import { useState } from 'react'
import './App.css'

import { Outlet } from "react-router-dom"
import Nav from './components/NavTab'

function App() {
 
  return (
    <div>
      <Nav />
      <main className="mx-3 ">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
