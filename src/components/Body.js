
import {createBrowserRouter } from 'react-router-dom';
import Browse from './Browse.js';
import Login from './Login.js';
import { RouterProvider } from 'react-router-dom';



const Body = () => {
  
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

    
      
    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;