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
    <div className='py-8'>
        <Controller>
            <PostForm post={post} />
        </Controller>
        </div>
  ): null
}

export default EditPost