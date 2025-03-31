
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import './abc.css'

// const CLIENT_ID="Ov23lit8mtxFgEztMbH3";
// //const CLIENT_SECRET=""
// function loginWithGithub(){
//     window.location.assign("https://github.com/login/oauth/authorize?cliend_id="+CLIENT_ID)
// }
export function Login(){
    
   
 
        const navigate=useNavigate();
        const result = useGoogleLogin({
            onSuccess: (credentialResponse) => { 
                navigate('/jonkes');
                console.log("login successfull");
                console.log(credentialResponse);
                const decoded = jwtDecode(credentialResponse.access_token);
                console.log(decoded)
                
            },
            onError:() => {
                console.log('Login Failed');
              }
}) ;
        return <div>
        <button className='buttonHolder'
                onClick={() => result()}>Sign in with Google 🐽
        </button>
        {/* <button className='buttonHolder2'
                onClick={loginWithGithub}>Sign in with Github 🐽
        </button> */}
        </div>
}