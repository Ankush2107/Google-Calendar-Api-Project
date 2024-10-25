import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import dotenv from 'dotenv';
dotenv.config();

function App() {
  let clientId = process.env.CLIENT_ID
  return (
    <div>
      <div className='App'>
        <h1>Google Calender Api</h1>
      </div>
      <div>
        <GoogleLogin 
          clientId={clientId} 
          buttonText="Sign in & Authorise Calendar" 
          onSuccess={responseGoogle}
          onFailure={responseError}
          cookiePolicy={'single_host_origin'}
          // This is important
          responseType='code'
          accessType='offline'
        />
      </div>
    </div>
  )
}

export default App
