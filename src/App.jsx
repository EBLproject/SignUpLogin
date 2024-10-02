import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import SignUpForm from './components/SignUpForm.jsx'
import SignInForm from './components/SignInForm.jsx'

function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<SignUpForm />
        },
        {
          path:'signIn',
          element:<SignInForm />
        }
      ]
    }
  ])

  return (
    <div className='flex justify-between align-center gap-2'>
      
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
