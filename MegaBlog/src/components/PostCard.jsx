import React, { useState } from 'react'
import service from '../appwrite/config'
import {Link} from  'react-router-dom'

function PostCard({$id , Title , FeaturedImage}) {
  const [imgError, setImgError] = useState(false);
  const placeholderImg = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23999" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
  
  return (
  <Link to={`/post/${$id}`}>
        <div className='w-full bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1'>
            <div className='w-full h-48 bg-gray-200 overflow-hidden'>
                <img 
                  src={imgError ? placeholderImg : service.getFilePreview(FeaturedImage)} 
                  alt={Title}
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' 
                  onError={() => setImgError(true)}
                />
            </div>
            <div className='p-4'>
                <h2 className='text-lg font-bold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors'>{Title}</h2>
                <p className='text-sm text-gray-500 mt-2'>Read more →</p>
            </div>
        </div>
    </Link>
  )
}

export default PostCard