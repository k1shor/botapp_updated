import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { senddisLike, sendLike } from './api/botapi';
import Bots from './Pages/Bots';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    const [redirect, setRedirect] = useState(false)
    const redirectto = () => {
        if (redirect) {
            return <Redirect to={{pathname:'/botdetail', state:{item} }}/>
            // console.log(redirect)
        }
    }

    const sendlike = (id, like) =>{
        
        sendLike(id,++like)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log("liked")
            }
        })
    }
    const senddislike = (id, like) =>{
        console.log(--like)
        senddisLike(id,--like)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log("disliked")
            }
        })
    }
    
    return (
        <>
{redirectto()}
            <div className="col p-2">
                <div className="card">
                    <div className='card-img-container'>
                        <img src={`http://localhost:8000/${item.image}`} className="card-img-top custom-image" alt="..." height={200} />
                        {console.log(item.image)}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name: {item.name}</h5>
                        <h5 className="card-title">type: {item.type}</h5>

                        
                        {/* <h5 className='card-text'>Type:{item.type}</h5> */}
                        {/* <p className="card-text">{item.detail}</p> */}
                        <div className='d-flex justify-content-between mx-auto'>
                            <div><Link to="#" onClick={()=>{
                                sendlike(item._id, item.like)
                            }}>{item.like}<i class="bi bi-hand-thumbs-up"></i></Link></div>
                            <div><Link to="#" onClick={()=>{
                                senddislike(item._id, item.dislike)
                            }}>{item.dislike}<i class="bi bi-hand-thumbs-down"></i></Link></div>
                        </div>
                        <a href='' className='text-decoration-none' onClick={()=>setRedirect(true)}    >View Details</a>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Card