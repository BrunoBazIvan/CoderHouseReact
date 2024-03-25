import { useState } from 'react'
import './App.css'
import {NavBar} from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'

export function App() {

  return (
      <>
      <NavBar/>
      <ItemListContainer
      text={"item"}
      />
      </>
  )
}
