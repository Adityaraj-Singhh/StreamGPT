import { useNavigate } from 'react-router-dom';
import logo from '../utils/logo.png';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }

    return (
        <div className='flex justify-between items-center absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img className='w-44' src={logo} alt="main" />
            <div className='flex items-center'>
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