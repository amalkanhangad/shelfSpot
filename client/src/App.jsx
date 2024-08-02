import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
function App() {
  console.log('App component rendered'); // Debugging log

  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
}

export default App
