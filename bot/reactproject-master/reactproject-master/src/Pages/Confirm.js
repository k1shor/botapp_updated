import React, { useEffect, useState } from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'

const Confirm = ({match}) => {
    const [error,setError] = useState('')
    const [success, setSuccess] = useState(false)
    console.log(match.params.id)

    useEffect(()=>{
        fetch(`http://localhost:8000/api/confirmation/${match.params.id}`, {
            method: "POST"    
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error)
            {
                setSuccess(false)
                setError(data.error)
            }
            else{
                setError('')
                setSuccess(true)
            }
        })
        .catch(error=>console.log(error))
        },[]
    )

    const showError = () => {
        if (error) {
            return <div>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div>User verified successfully.</div>
        }
    }



  return (
    <>
    <Nav/>
    {showError()}
    {showSuccess()}

    <Footer/>

    </>
  )
}

export default Confirm