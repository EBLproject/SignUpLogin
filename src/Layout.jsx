import React from 'react'
import { Outlet } from 'react-router-dom'
import SignUpSideBarContent from './components/SignUpSideBarContent'

function Layout() {
  return (
    <>
    <SignUpSideBarContent />
    <Outlet />
    </>
  )
}

export default Layout
