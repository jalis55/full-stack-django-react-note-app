import {Navigate} from 'react-router-dom'
import {jtwDecode} from 'jwt-decode';
import {api} from '../api';
import { ACCESS_TOKEN,REFRESH_TOKEN } from '../constants';
import { useState } from 'react'

const ProtectedRoute = ({children}) => {

    const [isAuthorized,setIsAuthozied]=useState(null);

    const refreshToken=async ()=>{

    }

    const auth=async ()=>{

    }

    if (isAuthorized===null){
        return <div>Loading......</div>
    }

    return isAuthorized ?children : <Navigate to="/login/" />

}

export default ProtectedRoute;
