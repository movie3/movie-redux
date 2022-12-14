import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import GoogleLogin from 'react-google-login';
// import { useNavigate } from 'react-router-dom';


function Google() {
    const responseGoogle = (response) => {
        console.log(response);
    }
  return (
      <div className="shadow-2xl">
          <GoogleLogin 
              clientId='76710521547-nbakpmr8qmrvj6gt2rhu7nhd75dg6ahr.apps.googleusercontent.com'
              render={(renderProps) => (
                  <button 
                      type="button"
                      className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                  >
                
                 <FcGoogle className="mr-4" />
                  </button>
              )}
          onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
          />
    </div>
  )
}

export default Google
