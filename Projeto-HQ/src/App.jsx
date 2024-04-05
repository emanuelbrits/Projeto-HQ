import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuadrinhoPage from './QuadrinhoPage'
import QuadrinhosPage from './QuadrinhosPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='quadrinhos'>
            <Route index element={<QuadrinhosPage/>}/>
            <Route path=':id' element={<QuadrinhoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
