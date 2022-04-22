import React, { useState } from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const AddChannelSuccess = () => {
const [name,setName] =useState("")
const [detail,setDetail] =useState("")
const [type,setType] =useState("")
const [link, setLink] = useState("")
const [image,setImage] = useState("./BOT_IMAGE/bot1.jpg")
const like = 0;
const dislike = 0;
const dispatch = useDispatch()




    return (
    <div>
        <Nav/>
            <h5 className='mt-5 text-center text-success'>Channel added</h5>
        <main class="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                <form>
                    <img src = './BOT_IMAGE/bt2.png' class="mb-4" alt="" width="72" height="72"/>
                        <h1 class="h3 mb-3 fw-bold">Add CHANNEL</h1>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={name} onChange={(e)=>setName(e.target.value)}/>
                                <label for="floatingInput">CHANNEL NAME</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInput2" placeholder="name@example.com" value={detail} onChange={(e)=>setDetail(e.target.value)}/>
                                <label for="floatingInput2">CHANNEL DETAIL</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={type} onChange={(e)=>setType(e.target.value)}/>
                                <label for="floatingInput">CHANNEL TYPE</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={link} onChange={(e)=>setLink(e.target.value)}/>
                                <label for="floatingInput">LINK</label>
                        </div>
                        
                        

                        
                        <a href='/addbotsuccess' class="w-100 btn btn-lg btn-primary" type="submit" onClick={()=>dispatch({
                            type:'ADD_CHANNEL',payload:{name,type,detail,like,dislike,image,link}
                        })}>Add Channel</a>
                        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>


        <Footer/>
    </div>
  )
}

export default AddChannelSuccess