import React from 'react'
import AdminSidebar from '../layout/AdminSidebar'
import Nav from '../layout/Nav'
import Bots from './Bots'

const AdminDashboard = () => {
  return (
    <div>
        <Nav/>
        <div className='row'>
            <div className='col-md-3'>
                <AdminSidebar/>
            </div>
            <div className='col-md-9'>
                <h2>Welcome to Admin Dashboard</h2>
            </div>
        </div>


    </div>
  )
}

export default AdminDashboard