import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from "../../features/authSlice"

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }

  return (
    <button 
    onClick={logoutHandler}
    className='inline-block px-6 py-2 duration-200 hover:bg-[#FFD43B] hover:text-black rounded-full text-white'>
      Logout
    </button>
  )
}

export default LogoutBtn