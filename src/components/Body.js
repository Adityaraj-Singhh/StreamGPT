
import {createBrowserRouter } from 'react-router-dom';
import Browse from './Browse.js';
import Login from './Login.js';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { addUser } from '../utils/userSlice.js';
import { removeUser } from '../utils/userSlice.js';
import { useDispatch } from 'react-redux';


const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
          path : "/",
          element : <Login/>
        },
        {
          path : "/Browse",
          element : <Browse/>
        }
      ]) 

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in,
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName}));  
          // ...
        } else {
          // User is signed out
          // ...
          removeUser();
        }
      });
    })
      
    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;