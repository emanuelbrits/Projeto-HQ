import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuadrinhoPage from './Pages/QuadrinhoPage'
import QuadrinhosPage from './Pages/QuadrinhosPage'
import AddQuadrinhoPage from './Pages/AddQuadrinhoPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/quadrinhos'>
            <Route index element={<QuadrinhosPage/>}/>
            <Route path=':id' element={<QuadrinhoPage/>}/>
        </Route>
          <Route path='addquadrinho' element={<AddQuadrinhoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
