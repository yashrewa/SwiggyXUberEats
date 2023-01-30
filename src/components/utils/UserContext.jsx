import { createContext} from "react";
const UserContext = createContext({
    user: {
        username: "please-login",
        emailId: "",
        DOB: "",
    },
})


export default UserContext