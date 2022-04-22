//for adding bot

export const addChannel = (Channel)=>{
    // console.log(bot)
    return fetch(`http://localhost:8000/api/addChannel`, {
        method:"POSt",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(Channel)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}


export const getallChannel = () =>{
    return fetch(`http://localhost:8000/api/channellist`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}