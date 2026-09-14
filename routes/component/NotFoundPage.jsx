import React from 'react'
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/",{replace : true});
    };

  return (
    <div className = "w-full h-screen">
        <div className = "w-full h-screen max-w-300 mx-auto flex items-center justify-evenly">
            <div className = "order-2 w-130 h-130"> 
                <img 
                src = {"/ErrorImage.png"} 
                alt = "404 Error" 
                className = "w-full h-full object-contain object-center"
                /> 
            </div>

            <div className = "order-1 h-120 pl-13">
                <h2 className = "text-9xl font-bold mt-9"> OOPS! </h2>
                <h5 className = "text-3xl w-120 my-9">We can't seem to find the page you're looking for.</h5>
                <h6 className = "text-md font-semibold text-gray-500 mb-6">Error Code: 404</h6>
                <button type='button' onClick = {handleClick} className="bg-purple-600 text-white font-semibold py-2.5 px-12 text-lg rounded-md hover:cursor-pointer hover:bg-purple-700" > Go to Home Page </button>
                </div>
    </div>
    </div>
  )
}

export default NotFoundPage;
