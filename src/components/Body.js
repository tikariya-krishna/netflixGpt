import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { useEffect } from "react"
import { auth } from "../utlis/firebase.js"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser } from "../utlis/redux/userSlice.js"
import { removeUser } from "../utlis/redux/userSlice.js"


const Body = () => {
  const dispatch = useDispatch();

    const Route = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>,
        }
    ])

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid , email, displayName } = user;
          dispatch(addUser({ uid:uid, email:email, displayName:displayName }) )
        } else {
          dispatch(removeUser());
        }
      });
    },[]);
  return (
    <>
    <RouterProvider router={Route}/>
    </>
  )
}

export default Body