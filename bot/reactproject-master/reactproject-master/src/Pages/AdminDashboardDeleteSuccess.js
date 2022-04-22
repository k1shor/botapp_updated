import React from 'react'
import AdminSidebar from '../layout/AdminSidebar'
import Nav from '../layout/Nav'
import Bots from './Bots'

const AdminDashboardDeleteSuccess = () => {
  return (
    <div>
        <Nav/>
        <div className='row'>
            <div className='col-md-3'>
                <AdminSidebar/>
            </div>
            <div className='col-md-9'>
              <div className='alert alert-danger'>BOT Deleted</div>
                <Bots/>
            </div>
        </div>


    </div>
  )
}

export default AdminDashboardDeleteSuccess