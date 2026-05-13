import React, {useState, useEffect} from 'react'
import { Container , PostCard } from '../components'
import appwriteService from "../appwrite/config"

function AllPosts() {
  const[posts ,setpost] = useState([])

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) =>{
      if(posts) setpost(posts.documents)
    })
  })
  return (
    <div className='w-full py-12 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen'>
        <Container>
            <div className='mb-8'>
                <h1 className='text-4xl font-bold text-gray-900 mb-2'>All Posts</h1>
                <p className='text-gray-600'>Discover amazing articles and stories</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {posts.map((post) => (
                    <div key={post.$id}>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            {posts.length === 0 && (
                <div className='text-center py-12'>
                    <p className='text-gray-500 text-lg'>No posts found. Check back soon!</p>
                </div>
            )}
            </Container>
    </div>
  )
}

export default AllPosts