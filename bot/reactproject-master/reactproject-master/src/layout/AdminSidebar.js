import userEvent from '@testing-library/user-event'
import React from 'react'
import { isAuthenticated } from '../api'

const AdminSidebar = () => {
    const {user} = isAuthenticated()
  return (
    <div><div>
    <div className="flex-shrink-0 p-3 bg-white" style={{ width: "280px" }}>
        <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <span className="fs-5 fw-semibold fw-bold">Admin Dashboard</span>
        </a>
        <ul className="list-unstyled ps-0">
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                    Bots
                </button>
                <div className="collapse" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="/addbot" className="link-dark rounded">Add Bots</a></li>
                        <li><a href="/bots" className="link-dark rounded">Find Bots</a></li>

                    </ul>
                </div>
            </li>
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                    Channels
                </button>
                <div className="collapse" id="dashboard-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="#" className="link-dark rounded">View Channels</a></li>
                        <li><a href="#" className="link-dark rounded">Add Channels</a></li>

                    </ul>
                </div>
            </li>
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                    Account
                </button>
                <div className="collapse" id="dashboard-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="#" className="link-dark rounded">{user.name}</a></li>
                        <li><a href="#" className="link-dark rounded">{user.email}</a></li>

                    </ul>
                </div>
            </li>
        </ul>
    </div>
    </div></div>
  )
}

export default AdminSidebar