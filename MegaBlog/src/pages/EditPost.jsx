import React , {useEffect , useState}from 'react'
import { Container , PostForm } from '../components'
import service from '../appwrite/config'
import { useNavigate , useParams} from 'react-router-dom'

function EditPost() {
    const[post , setpost] = useState(null)
    const{slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            service.getPost(slug).then((post) => {
                if(post) setpost(post)
            })
        }else{
            navigate('/')
        }
    } ,[slug , navigate])

    return post ? (
        <div className="w-full bg-gray-50 min-h-screen py-12">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Post</h1>
                    <PostForm post={post} />
                </div>
            </Container>
        </div>
    ) : null
}

export default EditPost