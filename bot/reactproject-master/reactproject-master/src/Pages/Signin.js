import React, { useState, useEffect } from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
const Signin = () => {
    const [user, setUser] = useState()

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        redirect: ""
    })

    const { email, password, error, redirect } = values

    useEffect(() => {
        setUser(
            localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : ""
        )
    }, [localStorage.getItem('jwt')])

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
        console.log(name, event.target.value)
    }

    const handleSubmit = e => {
        // console.log(values)
        e.preventDefault();
        fetch(`http://localhost:8000/api/signin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    setValues({ ...values, error: data.error })
                }
                else {
                    // console.log(data)
                    setValues({ ...values, redirect: true })
                    localStorage.setItem('jwt', JSON.stringify(data))
                }
            })
            .catch(error => console.log(error))
    }

    const showError = () => {
        if (error) {
            return <div>{error}</div>
        }
    }

    const redirectTO = () => {
        if (redirect) {
            if(user && user.user.role === 1){
                return <Redirect to='/admin/dashboard' />
            }
            if(user && user.user.role === 0){
                return <Redirect to='/user/home' />
            }
        }
    }

    return (
        <>

            <Nav />
            {showError()}
            {redirectTO()}
            <main class="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                <form>
                    <img src='./BOT_IMAGE/bt2.png' class="mb-4" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 fw-bold">Please sign in</h1>

                    <div class="form-floating mb-2">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange('email')} value={email} />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-1">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange('password')} value={password} />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3 text-start">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={e => handleSubmit(e)}>Sign in</button>
                    Donot have an account. <Link to='/Signup'>Register</Link>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>



            <Footer />


        </>


    )
}

export default Signin