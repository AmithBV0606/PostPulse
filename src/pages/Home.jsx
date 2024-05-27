import React, {useEffect, useState} from 'react'
import service from '../appwrite/configure'
import { Button, Container, PostCard, myStyle} from '../components'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      service.getPosts()
      .then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
      })
    }, [])

    if(posts.length === 0){
        return(
            <div className='w-full py-8 text-center bg-cover flex' style={myStyle}>
                <div className='w-5/12 p-2 backdrop-blur-md m-4 border border-transparent flex justify-center items-center'>
                    <h2 className='text-gray-200 font-sans text-2xl leading-loose mx-auto text-left'>
                    Welcome to PostPulse, your go-to platform for seamless and dynamic blogging. Built with React and styled using TailwindCSS, PostPulse offers a sleek and intuitive interface for all your writing needs. Powered by Appwrite on the backend, our app ensures a robust and secure environment where you can effortlessly create, edit, and share your articles. Whether you're uploading a captivating cover picture or refining your latest post, PostPulse makes the entire process smooth and enjoyable. Dive in and let your voice resonate with PostPulse!
                    </h2>
                </div>

                <div className='w-6/12 flex flex-col gap-6 justify-center items-center'>
                    <div className='flex flex-col gap-6 justify-center items-center backdrop-blur-md p-10'>
                        <Link to="/signup">
                            <Button className='w-60 h-12 bg-[#FFD43B] hover:text-black'>
                                Signup
                            </Button>
                        </Link>
                    
                        <h2 className='text-white'>OR</h2>

                        <Link to="/login">
                            <Button className='w-60 h-12 bg-[#FFD43B] hover:text-black'>
                                Login
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className='w-full py-8 text-center bg-cover flex' style={myStyle}>
                <div className='w-5/12 p-2 backdrop-blur-xl m-4 border border-transparent flex justify-center items-center'>
                    <h2 className='text-gray-200 font-sans text-2xl leading-loose mx-auto text-left'>
                    Welcome to PostPulse, your go-to platform for seamless and dynamic blogging. Built with React and styled using TailwindCSS, PostPulse offers a sleek and intuitive interface for all your writing needs. Powered by Appwrite on the backend, our app ensures a robust and secure environment where you can effortlessly create, edit, and share your articles. Whether you're uploading a captivating cover picture or refining your latest post, PostPulse makes the entire process smooth and enjoyable. Dive in and let your voice resonate with PostPulse!
                    </h2>
                 </div>
    
                <div className='w-6/12 flex justify-center items-center m-4'>
                <Link to="/all-posts">
                    <Button className='w-80 h-14 bg-[#FFD43B] hover:text-black'>
                        All Posts
                    </Button>
                </Link>
                </div>
            </div>
        )
    }
}

export default Home