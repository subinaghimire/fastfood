import food from "../assets";
import cartIcon from "../assests";
import {Link} from "react-router-dom";

export const Header = {} => {
    return (
        <nav id="headee=r" className="bg-black text-white">
            <div className="w-full containerex-auto flex flex-wrap items-center justify-between at-0 py-2">
                <div classsName="logo-wrapper pl-4 flex items-center">
                <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                <img scr={"food"} alt="logo" className="w-40 h-40 object-cover"/>
                </Link>
                   
        </div>
        <div className="nav-menu-wrapper flex items-center justify-between spcae-x-10">
             <Link to ="/" className="text-xl"> Home </Link>
             <Link to="#about" className="text-xl"> About </Link>

        </div>
        <div className="flex items-center justify-center space-x-4">
             <Link to="/cart" />
             <img src="{cartIcon} alt="cart" /> 
             <Link to="/login">Log In</Link>
             <Link to="/register">Sign Up</Link>
        </div>
        </div>
        </nav>

    
    
    );
    
};