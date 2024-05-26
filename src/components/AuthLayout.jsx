import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication=true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(() => state.authSlice.status)

    useEffect(() => {
      if (authentication && authStatus !== authentication) {
        navigate('/login')
      } else if(!authentication && authStatus !== authentication){
        navigate("/")
      }
      setLoader(false)

      // Instead of the above if-else-if

    //   if(authStatus === true){
    //     navigate("/")
    //   } else {
    //     navigate("/login")
    //   }
    
    }, [authStatus, navigate, authentication])
    

  return loader ? <h1>Loading...</h1> : <>{children}</>
}