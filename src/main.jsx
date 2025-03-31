import { StrictMode } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
    <GoogleOAuthProvider clientId="1060818371741-c9571ioqmo3pi1037jvje1e91p7kvfgd.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
)
