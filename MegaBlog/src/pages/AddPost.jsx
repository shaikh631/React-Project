import React from 'react'
import { Container , PostForm } from '../components'

function AddPost() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12'>
        <Container>
            <div className='max-w-6xl'>
                <PostForm />
            </div>
        </Container>
    </div>
  )
}

export default AddPost