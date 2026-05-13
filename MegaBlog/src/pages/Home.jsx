import React, {useEffect , useState} from 'react'
import service from '../appwrite/config'
import { Container , PostCard } from '../components'

function Home() {
    const [posts , setpost] = useState(null)

    useEffect(() => {
        service.getPosts().then((res) =>{
            if(res){
                setpost(res.documents || [])
            } else {
                setpost([])
            }
        }).catch(() => setpost([]))
    },[] )

    if (posts === null) {
        return (
            <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="loader mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Loading amazing posts...</p>
                </div>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
                <Container>
                    <div className="flex flex-col items-center justify-center py-24">
                        <div className="text-center max-w-2xl">
                            <div className="mb-6">
                                <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 3 9.11 3 12.972c0 3.861 3.5 6.828 9 6.828s9-2.967 9-6.828c0-3.861-3.5-6.719-9-6.719z" />
                                </svg>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                No Posts Yet
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Be the first to share your story and inspire our community!
                            </p>
                            <div className="space-y-4">
                                <p className="text-gray-500">
                                    Sign in to create your first post and start your blogging journey.
                                </p>
                                <a href="/login" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

  return (
   <div className='w-full bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen'>
        <Container>
            <div className='py-12'>
                <div className='mb-12'>
                    <h1 className='text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Featured Stories</h1>
                    <p className='text-lg text-gray-600'>Explore our latest articles and insights from our community</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </div>
    )
}

export default Home