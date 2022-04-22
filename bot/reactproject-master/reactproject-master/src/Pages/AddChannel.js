import React, { useState } from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { addChannel } from '../api/channelapi'


const AddChannel = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState("")
    const [link, setLink] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [image, setImage] = useState("./BOT_IMAGE/bot1.jpg")
    const like = 0;
    const dislike = 0;
    const dispatch = useDispatch()

    const addChannel = (e) => {
        // e.preventDefault()
        addChannel({name, type, description})
        // .then(res=>res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess(false)
                } else {
                    setSuccess(true)
                    setError('')
                }

            }
            )
            .catch(error => console.log(error))
        }

        const showError = () => {
            if (error) {
               return <div>{error}</div>
            }
        }

        const showSuccess = () => {
            if (success) {
              return  <div>New Channel added.</div>
            }
        }



        return (
            <div>
                <Nav />
                {
                    showError()
                }
                {
                    showSuccess()
                }
                <main class="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                    <form>
                        <img src='./BOT_IMAGE/bt2.png' class="mb-4" alt="" width="72" height="72" />
                        <h1 class="h3 mb-3 fw-bold">Add CHANNEL</h1>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={name} onChange={(e) => setName(e.target.value)} />
                            <label for="floatingInput">CHANNEL NAME</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInput2" placeholder="name@example.com" value={description} onChange={(e) => setDescription(e.target.value)} />
                            <label for="floatingInput2">CHANNEL DETAIL</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={type} onChange={(e) => setType(e.target.value)} />
                            <label for="floatingInput">CHANNEL TYPE</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={link} onChange={(e) => setLink(e.target.value)} />
                            <label for="floatingInput">LINK</label>
                        </div>




                        <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={addChannel}>Add Channel</button>
                        <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                    </form>
                </main>


                <Footer />
            </div>
        )
    }

    export default AddChannel