//for adding bot

export const addBot = (bot)=>{
    // console.log(bot)
    return fetch(`http://localhost:8000/api/addbot`, {
        method:"POSt",
        headers:{
            Accept:'application/json',
            // "Content-Type":"application/json"
        },
        body:bot
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

export const getallBots = () =>{
    return fetch(`http://localhost:8000/api/botlist`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getgamingBots = () =>{
    return fetch(`http://localhost:8000/api/gamingbotlist`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export const getmusicBots = () =>{
    return fetch(`http://localhost:8000/api/musicbotlist`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export const getutilityBots = () =>{
    return fetch(`http://localhost:8000/api/utilitybotlist`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export const getentertainmentBots = () =>{
    return fetch(`http://localhost:8000/api/entertainmentbotlist`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export const getproductivityBots = () =>{
    return fetch(`http://localhost:8000/api/productivitybotlist`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getbottypes = () =>{
    return fetch(`http://localhost:8000/api/categories`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export const sendLike = (id, like)=>{
    return fetch(`http://localhost:8000/api/addlike/${id}`, {
        method:"PUT",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify({like}),
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

export const deleteBOT = (id) =>{
    return fetch(`http://localhost:8000/api/deletebot/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const senddisLike = (id, dislike)=>{
    return fetch(`http://localhost:8000/api/dislike/${id}`, {
        method:"PUT",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify({dislike}),
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

