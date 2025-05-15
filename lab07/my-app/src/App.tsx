import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration'
import Authorization from './pages/Authorization';
import RecoverPassword from './pages/RecoverPassword'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/sign-up' element={<Registration />} />
          <Route path='/sign-in' element={<Authorization />} />
          <Route path='/reset-password' element={<RecoverPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
