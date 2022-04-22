import React, { useEffect, useState } from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBot, getbottypes } from '../api/botapi'
import AdminSidebar from '../layout/AdminSidebar'

const AddBot = () => {
    const [values, setValues] = useState({
        name: "",
        description: "",
        type: "",
        link: "",
        image: '',
        formData: ''

    })
    const [types, setType] = useState([])
    const { name, description, type, link, formData } = values
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [image, setImage] = useState("./BOT_IMAGE/bot1.jpg")
    const like = 0;
    const dislike = 0;
    const dispatch = useDispatch()

    const addbot = (e) => {
        e.preventDefault()
        addBot(formData)
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
            return <div>New bot added.</div>
        }
    }

    useEffect(() => {
        getbottypes()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setType(data)
                    setValues({ ...values, formData: new FormData })
                }
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = name => event => {
        const value = name === 'image' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        // console.log(name,value)
        setValues({ ...values, [name]: value })
    }







    return (
        <div>
            <Nav />
            <div className='mx-auto'>
                
                    <div>
                        
                        {
                            showError()
                        }
                        {
                            showSuccess()
                        }
                        <main class="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                            <form>
                                <img src='./BOT_IMAGE/bt2.png' class="mb-4" alt="" width="72" height="72" />
                                <h1 class="h3 mb-3 fw-bold">Add BOT</h1>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={name} onChange={handleChange('name')} />
                                    <label for="floatingInput">BOT NAME</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInput2" placeholder="name@example.com" value={description} onChange={handleChange('description')} />
                                    <label for="floatingInput2">BOT DETAIL</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <select class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange('type')} >
                                        <option>Choose bot type</option>
                                        {
                                            types.map(item => <option value={item.category_name}>{item.category_name}</option>)
                                        }

                                    </select>
                                    <label for="floatingInput">BOT TYPE</label>
                                </div>
                                <div className='form-floating mt-2'>
                                    <input className='form-control' type="file" id="bot_image" placeholder='bot image' onChange={handleChange('image')} accept="image/*" />
                                    <label htmlFor='bot_image'>Bot Image</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={link} onChange={handleChange('link')} />
                                    <label for="floatingInput">LINK</label>
                                </div>




                                <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={addbot}>Add Bot</button>
                                <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                            </form>
                        </main>


                    </div>

            </div>




        </div>




    )
}

export default AddBot