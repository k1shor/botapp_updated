import React, { useState } from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom'
const Signup = () => {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        date_of_birth: "",
        gender: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const { first_name, last_name, date_of_birth, gender, email, password, error, success } = values;



    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
        console.log(name, event.target.value)
    }

    const handleSubmit = e => {
        console.log(values)
        e.preventDefault();
        fetch(`http://localhost:8000/api/addUser`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
        .then(res=>res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    setValues({ ...values, error: data.error })
                }
                else {
                    setValues({ ...values, first_name:"",last_name:"",date_of_birth:'', gender:'',email:'',password:"",error: "", success: true })
                }
            })
            .catch(error => console.log(error))
    }

    const showError = () => {
        if (error) {
            return <div>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div>New User added. Verify to continue.</div>
        }
    }


    return (
        <>



            <Nav />

            {showError()}
            {showSuccess()}
            <main class="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                <form>
                    <img class="mb-4" src="" alt="" width="72" height="57" />
                    <h1 class="h3 mb-3 fw-bold">Signup</h1>

                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="floatingfname" placeholder="firstname" onChange={handleChange('first_name')} value={first_name} />
                        <label for="floatingfname">First Name</label>
                    </div>

                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="floatinglname" placeholder="lastname" onChange={handleChange('last_name')} value={last_name} />
                        <label for="floatinglname">Last Name</label>
                    </div>

                    <div class="form-floating mb-2">
                        <input type="date" class="form-control" id="floatingdate" placeholder="date" onChange={handleChange('date_of_birth')} value={date_of_birth} />
                        <label for="floatinglname">Date of Birth</label>
                    </div>

                    <div className='form-floating mb-1'>
                        <div className='form-control d-flex'>

                            <div class="form-check">
                                <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleChange('gender')} value='male' />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleChange('gender')} value='female' />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={handleChange('gender')} value='other' />
                                <label className="form-check-label" for="flexRadioDefault3">
                                    Others
                                </label>
                            </div>
                        </div>
                        <label>Gender</label>
                    </div>

                    <div class="form-floating mb-2">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange('email')} value={email} />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-1">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange('password')} value={password} />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="form-floating mb-1">
                        <input type="password" class="form-control" id="floatingCPassword" placeholder="CPassword" />
                        <label for="floatingCPassword">Confirm Password</label>
                    </div>

                    <div class="checkbox mb-3 text-start">
                        <label>
                            <input type="checkbox" value="i-agree" /> I agree to the terms and condition
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={e=>handleSubmit(e)}>Register</button>
                    Already have an account. <Link to='/Signin'>Signin</Link>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>



            <Footer />


        </>


    )
}

export default Signup