import { useState , useEffect, use } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header  from './componets/Header/Header'
import Footer from './componets/Footer/Footer'

function App() {
 const[loading,setLoading] = useState(true)
 const dispatch = useDispatch()
 useEffect(()=>{
  authService.curretUser().then((userData)=>{
    if(userData){
    dispatch(login({userData}))
  }else{
    dispatch(logout())
  }
})
.finally(()=> setLoading(false))
 },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
     <div className='w-full block'>
     <Header/>
    <h1>hello</h1>
   <Footer/>
  </div>
    </div>
  ) : (
    <div className="App">
      <h1>Loading...</h1>
    </div>
  )
}

export default App
