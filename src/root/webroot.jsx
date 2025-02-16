import React from 'react'
import Head from "../components/NavbarExample"
import { Outlet } from "react-router-dom"

function webroot() {
  return (
    <div>
        <Head/>
        <Outlet/>
    </div>
  )
}

export default webroot