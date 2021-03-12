import React from 'react'
import { Header } from './components/Header/Header'
import { Home } from './Pages/Home'
import { Cart } from './Pages/Cart'
import { Route } from 'react-router-dom'

export const App = () => {
  return (
    <div className="wrapper">
      < Header />
      <div className="content">
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div >
  )
}