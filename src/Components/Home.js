import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <header>
          <img src='http://www.sneakerbox.hu/wp-content/uploads/2016/03/Converse-Chuck-Taylor-All-Star-II-00-640x518.jpg'/>
          <h1>Converse Chuck Taylor II</h1>
          <h2>Introducing The New Classic</h2>
        </header>
        <main>
          <div className='leftColumn'>
            <h3><Link to='/Technology'>Technology</Link></h3>
            <p>Introducing Climate Counter. It infuses meticulous design, premium materials and durable construction to help keep you comfortable, and doing what you want to do, in all types of weather conditions.</p>
          </div>
          <div className='middleColumn'>
            <h3><Link to='/Lunarlon'>Lunarlon</Link></h3>
            <p>Out with the old, in with the new! Nike Lunarlon Insole was inserted to add more cushioning and support.</p>
            </div>
            <div className='rightColumn'>
              <h3><Link to='/Gussted'>Gusseted Tounge</Link></h3>
              <p>The tounge was designed to help keep water out.New</p>
            </div>
        </main>
        <footer>
          <p className='copyright'>&copy; 2016 BRUH</p>
        </footer>
      </div>
    )
  }
}
 export default Home
