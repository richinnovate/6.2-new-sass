import React from 'react'
import { Link }  from 'react-router'

class App extends React.Component {
render () {
  const { children } = this.props
  const currentPath = children.props.location.pathname.charCodeAt(1)
  return <div className="App">
    {children}
  <Link to='/' ><button className={currentPath}>Go Home</button></Link>
  </div>
  }
}
export default App
