import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { isAuthenticated } from '../api'
// import {isAutheticated} 

const Nav = () => {
    const [user, setUser] = useState()
    const [redirect, setRedirect] = useState(false)
    // const {user} = isAuthenticated()
    

    useEffect(() => {
        setUser(
            localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : ""
        )
    }, [localStorage.getItem('jwt')])

    const redirectoHome = () =>{
        if(redirect){
            return <Redirect to='/'/>
        }
    }

    return (
        <>
        {redirectoHome()}
            <div className='row custom-nav-color'>
                <div className='col-sm-12 col-md-1'>
                    <div className='nav'>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                <i class="bi bi-list text-white fw-bold fs-3"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">Home</a></li>
                                <li><a class="dropdown-item" href="/gaming">Gaming</a></li>
                                <li><a class="dropdown-item" href="/music">Music</a></li>
                                <li><a class="dropdown-item" href="/utility">Utility</a></li>
                                <li><a class="dropdown-item" href="/productivity">Productivity</a></li>
                                <li><a class="dropdown-item" href="/entertainment">Entertainment</a></li>
                                <li><hr class="dropdown-divider" /></li>
                       {!user &&
                                <li><a class="dropdown-item" href="/Signup">Sign up</a></li>
                       }
                             
                             {user && <>
                                <li><a class="dropdown-item" href="/addbot">Add BOT</a></li>
                                <li><a class="dropdown-item" href="/addchannel">Add Channel</a></li>
                                </>
}

                            </ul>
                        </li></div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <a href='/' className='text-decoration-none'>
                        <h3 className='text-center text-white pt-2'>Telegram Bots And Channel</h3>
                    </a>
                </div>
                <div className='col-sm-12 col-md-3 text-end'>
                    {
                        !user &&
<>
                        <a className='btn btn-success mt-2 text-white fs-5' href='/signin'><i class="bi bi-box-arrow-in-left"></i>LOGIN</a>
                        <a className='btn btn-success mt-2 text-white fs-5' href='/register'><i class="bi bi-box-arrow-in-left"></i>SIGN UP</a>
                        </>
                    }
                     {
                        user && user.user.role ===0 &&
                        <a className='btn btn-success mt-2 text-white fs-5' href='/user/home'><i class="bi bi-box-arrow-in-left"></i>Profile</a>
                    }
                    {
                        user && user.user.role ===1 &&
                        <a className='btn btn-success mt-2 text-white fs-5' href='/admin/dashboard'><i class="bi bi-box-arrow-in-left"></i>Dashboard</a>
                    }
                    {
                        user && 
                        <a className='btn btn-outline mt-2 text-white fs-5' href='#'
                            onClick={() => {
                                localStorage.removeItem('jwt')
                                fetch(`http://localhost:8000/api/signout`, {
                                    method: "GET"
                                })
                                console.log("signout")
                                setRedirect(true)
                            }
                            }
                        ><i class="bi bi-box-arrow-in-left"></i>LOG OUT</a>

                    }
                   




                </div>
            </div>

        </>
    )
}

export default Nav