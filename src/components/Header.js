import { useState } from "react"
import { signOut } from "firebase/auth";
import { auth } from "../utlis/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handelSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }


  return (
    <>
    <div className='absolute w-screen z-40 pt-5 px-24'>
      <div className='flex justify-between items-center'>
        <img src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460' className='w-40' alt='Logo'/>

        {user && 
        <div className='relative'>
          <div className='flex cursor-pointer' onClick={toggleDropdown}>
            <img src='https://i.pinimg.com/736x/91/86/1b/91861b749841221d52122f0c2933d8a6.jpg' alt='Sign out logo' className='w-[32px] h-[32px] rounded-lg'/>
            <i className="fa-solid fa-caret-down my-auto"></i>
          </div>
        

          
          <div className={`${isDropdownOpen === true ? "block" : "hidden"} absolute right-0 mt-3 w-48 bg-black/80 text-white rounded-md p-3 space-y-3`}>
            <div className="hover:bg-white/10 p-2 rounded-md cursor-pointer">
              <i className="fa-solid fa-gear"></i> Setting
            </div>
            <hr className='border-b-2'/>
            <div className="hover:bg-white/10 p-2 rounded-md cursor-pointer" onClick={handelSignOut}>
              <i className="fa-solid fa-right-from-bracket"></i> Sign out
            </div>
          </div>
  
        </div>
        }

      </div>
    </div>
    </>
  )
}

export default Header