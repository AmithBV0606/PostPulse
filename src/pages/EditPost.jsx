import React, {useState, useEffect} from 'react'
import { PostForm, Container } from '../components'
import service from '../appwrite/configure'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      if(slug){
            service.gePost(slug)
            .then((post) => {
                if(post){
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
    

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost