import { useNavigate } from 'react-router-dom';

import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from '../utils/userSlice.js';
import { removeUser } from '../utils/userSlice.js';
import { toggleGptSearchView } from '../utils/gptSlice.js';
import { SUPPORTED_LANGUAGES } from '../utils/constants.js';
import { changeLanguage } from '../utils/configSlice.js';


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);
    const dispatch = useDispatch();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in,
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));  
            navigate("/browse");
            // ...
          } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            navigate("/");
          }
        });
            //unsubscribe when component unmounts
        return () => unsubscribe();
      },[dispatch,navigate]);


    const handleGptSearchClick= () => {
        //Toogle GPT Search 
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className='flex justify-between items-center absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
            
            <div class="flex items-center justify-center">
                 <span class="text-red-600 my-5 text-5xl font-bold tracking-wider drop-shadow-lg">StreamGPT</span>
            </div>

            <div className='flex items-center'>
            {showGptSearch &&(<select className='bg-gray-900 text-white p-2 m-2' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
            </select>)}
            {user && (
                <button className='py-2 px-4 mx-4 font-bold bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>
               {showGptSearch?"Home" : "AI Search"}
                </button>

            )}
                {user && user.photoURL && (
                    
                    <img
                        className='w-12 h-12 rounded-full' // Added rounded-full for a circular image
                        alt="usericon"
                        src={user.photoURL}
                    />
                )}
                {user && (
                    <button className='font-bold bg-red-700 rounded-lg m-2 p-2 text-white' onClick={handleSignOut}>Sign Out</button>
                )}
            </div>
        </div>
    )
}

export default Header;