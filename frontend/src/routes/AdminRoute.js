import React from 'react'
import { useAuth } from '../contexts/authContext'
import {Redirect, Route} from "react-router-dom"

const AdminRoute = ({component:Component,...rest}) => {
    const {currentUser, isAdmin} = useAuth()
    // console.log(isAdmin + ` AR YRA`)
    return (
        <Route {...rest} render={(props)=>{
            return !!currentUser && isAdmin ? <Component {...props}/>:<Redirect to='/login'/>
        }}/>
    )
}

export default AdminRoute
