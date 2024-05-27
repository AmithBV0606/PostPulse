import React from 'react'
import { Container, PostForm, myStyle } from '../components'

function AddPost() {
  return (
    <div className='py-8' style={myStyle}>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost