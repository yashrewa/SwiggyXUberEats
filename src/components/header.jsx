import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
import Theme from "./utils/Theme";
import { useSelector } from "react-redux";


const HeaderComponent = () => {

    const {user} = useContext(UserContext)
    const {theme} = useContext(Theme)

   const cartItems = useSelector(store => store.cart.items)


    return (
      <div className="flex justify-center lg:top lg:justify-between">
        <div className="pl-2 pt-2"><Link to="/"><Logo /></Link></div>
        <div className="hidden lg:block">
          <ul className="lg:flex lg:p-2">
            <li className="p-3 lg:text-xl pt-2 font-Sans-serif "><Link to="/">Home</Link></li>
            <li className="p-3 lg:text-xl pt-2 font-Sans-serif "><Link to="/about">About</Link></li>
            <li className="p-3 lg:text-xl pt-2 font-Sans-serif "><Link to="/contact">Contact</Link></li>
            <li className="p-3 lg:text-xl pt-2 font-Sans-serif "><Link to="/weather">Weather Info</Link></li>
            <li className="p-3 lg:text-xl pt-2 font-Sans-serif ">🛒 {cartItems.length}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent