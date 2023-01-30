import React from "react";
import { render } from "react-dom";

class Classprofile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy User",
                avatar_url: "",
            }
        };
        console.log(this.state.userInfo)
        
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/yashrewa")
        const fetchedUserInfo=await data.json();
        this.setState({userInfo: fetchedUserInfo})
    }
    


    render(){
        
        return <div className="class-profile">
            <div className="class-profile-header"><h1>Name: {this.state.userInfo.name}</h1></div>
            <img src={this.state.userInfo.avatar_url}></img>
        </div>
    }
}
export default Classprofile;