import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
import Theme from "./utils/Theme";


const HeaderComponent = () => {

    const {user} = useContext(UserContext)
    const {theme} = useContext(Theme)
    return (
      <div className="flex justify-center lg:top lg:justify-between">
        <Link to="/"><Logo /></Link>
        <div className="hidden lg:block">
          <div className="flex justify-end px-13">
          <span className="px-6">{user.username}</span>
          <span className="pr-6">{theme}</span>
        </div>
          <ul className="lg:flex lg:p-2">
            <li className="p-3 lg:text-xl pt-2 font-Sans-serif "><Link to="/">Home</Link></li>
            <li className="p-3 lg:text-xl pt-2 font-Sans-serif "><Link to="/about">About</Link></li>
            <li className="p-3 lg:text-xl pt-2 font-Sans-serif "><Link to="/contact">Contact</Link></li>
            <li className="p-3 lg:text-xl pt-2 font-Sans-serif "><Link to="/weather">Weather Info</Link></li>
            <li className="p-3 lg:text-xl pt-2 font-Sans-serif ">Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent