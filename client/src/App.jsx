import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';
function App() {
  console.log('App component rendered'); // Debugging log

  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <Outlet />
      </div>
      <MyFooter/>
    </>
  )
}

export default App
