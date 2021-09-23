import React from 'react'
import { useAuth } from '../contexts/authContext'
import {Redirect, Route} from "react-router-dom"

const PrivateRoute = ({component:Component,...rest}) => {
    const {currentUser} = useAuth()
    // console.log(currentUser)
    return (
        <Route {...rest} render={(props)=>{
            return !!currentUser ? <Component {...props}/>:<Redirect to='/login'/>
        }}/>
    )
}

export default PrivateRoute
