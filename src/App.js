import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Section from './components/Section/Section'
import BlogPage from './components/BlogPage/BlogPage'
import DocsPage from './components/DocsPage/DocsPage'
import TutorialPage from './components/TutorialPage/TutorialPage'
import HomeWrapper from './pages/HomeWrapper'
import UniqElem from './components/UniqElem/UniqElem'
import Card from './components/Card/Card'
import ComunityPage from './components/ComunityPage/CommunityPage'
import Error404 from './pages/Error404/Error404'
import AdminAddPage from './components/AdminAddPage/AdminAddPage'
import EditPage from './components/EditPage/EditPage'
import EditUniq from './components/EditUniq/EditUniq'


function App() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
  const [cars, setCars] = useState([])

  return (
    <div>
       <Routes>
        <Route path='/' element={<HomeWrapper search={search} setSearch={setSearch}/>}>
          <Route index element={<Section search={search}  cars={cars} setCars={setCars} cards={cards} setCards={setCards}/>}/>
          <Route path='docs' element={<DocsPage />} />
          <Route path='tutorial' element={<TutorialPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='add' element={<AdminAddPage cars={cars} setCars={setCars} />} />
          <Route path='edit' element={<EditPage cars={cars} search={search}/>} />
          <Route path='edit/:id' element={<EditUniq cars={cars} setCars={setCars}/>} />
          <Route path='comunity' element={<ComunityPage />} />
          <Route path='card' element={<Card cards={cards} setCards={setCards}/>} />
          <Route path='home/:id' element={<UniqElem cars={cars} cards={cards} setCards={setCards}/>} />
        </Route>
        
        <Route path='*' element ={<Error404/>}/>
      </Routes>
    </div>
  )
}

export default App