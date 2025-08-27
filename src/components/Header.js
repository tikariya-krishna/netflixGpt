import { useState, useEffect } from "react"
import { signOut } from "firebase/auth";
import { auth } from "../utlis/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/redux/userSlice.js";
import { removeUser } from "../utlis/redux/userSlice.js";
import { LOGO } from "../utlis/constent.js";
import { SIGNOUTICON } from "../utlis/constent.js";
import {toggleGptSearch} from '../utlis/redux/gptSlice.js'
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store)=> store.user);
  const gptSearch = useSelector((store)=> store.gpt.showGptSearch)
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handelSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }

  const toggleSearch = () =>{
    dispatch(toggleGptSearch());
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid , email, displayName } = user;
        dispatch(addUser({ uid:uid, email:email, displayName:displayName }) )
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  },[]);


  return (
    <>
    <div className='absolute w-full z-40 pt-5 px-20 bg-gradient-to-t to-black/80 from-transparent'>
      <div className='flex justify-between items-center'>
        <img src={LOGO} className='w-40' alt='Logo'/>

        {user && 
        <div className='relative flex gap-5'>

          <button className="p-2 text-white bg-purple-800 rounded-md" onClick={toggleSearch}>{gptSearch ? "Home" : "GPT Search"}</button>

          <div className='flex cursor-pointer my-auto' onClick={toggleDropdown}>
            <img src={SIGNOUTICON} alt='Sign out logo' className='w-[32px] h-[32px] rounded-md'/>
            <i className={`fa-solid fa-caret-${isDropdownOpen === true ? "up" : "down"} my-auto`}></i>
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