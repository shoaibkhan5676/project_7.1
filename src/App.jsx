import React from 'react'
import Dashboard from './components/Dashboard'
import DashboardContent from './pages/Dashboard/components/DashboardContent'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Transactions from './pages/transactions/Transactions';
import Support from './pages/Support/Support';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Dashboard title="Dashboard" ><DashboardContent/></Dashboard>
  },
  {
    path:"/transactions",
    element:<><Dashboard title="Transactions" ><Transactions/></Dashboard></>
  },
  {
    path:"/support",
    element:<Dashboard title="Support" ><Support/></Dashboard>
  },
])

const App = () => {
  return (
    <>
    
    <RouterProvider router={router} />
   
      
    </>
  )
}

export default App
