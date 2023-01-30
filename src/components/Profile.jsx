import { useState, useEffect } from "react";

const Profile = () =>{
    
    const [info, setInfo] = useState("")

    useEffect(() => {
        getUserInfo();
    },[])
    async function getUserInfo(){
        const data = await fetch("https://api.github.com/users/yashrewa")
        const json = await data.json()
        setInfo(json)
    }
    const {avatar_url, name} = info;

    return(
        <div className="more-info">
            <h2>Name: {name}</h2>
            <div><img src={avatar_url}/></div>
              
        </div>
        
    )
}

export default Profile;
