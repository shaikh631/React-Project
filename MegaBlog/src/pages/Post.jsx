import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
      const [post, setPost] = useState(null);
      const [imgError, setImgError] = useState(false);
      const [showFullImage, setShowFullImage] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();
    const placeholderImg = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23ddd" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23999" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.UserId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.FeaturedImage);
                navigate("/");
            }
        });
    };
    const profile = (() => {
        appwriteService.getCurrentUser(userName)
    })
    return post ? (
        <div className="w-full bg-gray-50 min-h-screen py-12">
            <Container>
                <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src={imgError ? placeholderImg : appwriteService.getFilePreview(post.FeaturedImage)}
                            alt={post.Title}
                            className="w-full h-80 object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
                            onError={() => setImgError(true)}
                            onClick={() => setShowFullImage(true)}
                        />
                        {isAuthor && (
                            <div className="absolute right-4 top-4 flex gap-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="shadow">Edit</Button>
                                </Link>
                                <Button bgColor="bg-red-500" className="shadow" onClick={deletePost}>Delete</Button>
                            </div>
                        )}
                    </div>

                    <div className="p-8">
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{post.Title}</h1>
                        <div className="flex items-center text-sm text-gray-500 gap-4 mb-6">
                            <span>By {post.UserName || 'Unknown Author'}</span>
                            <span>•</span>
                            <span>{new Date(post.$createdAt || Date.now()).toLocaleDateString()}</span>
                        </div>

                        <div className="prose max-w-none text-gray-800">{parse(post.Context)}</div>
                    </div>
                </article>
                {showFullImage && (
                    <div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                        onClick={() => setShowFullImage(false)}
                    >
                        <img
                            src={imgError ? placeholderImg : appwriteService.getFilePreview(post.FeaturedImage)}
                            alt={post.Title}
                            className="max-w-full max-h-full rounded-lg shadow-2xl"
                        />
                    </div>
                )}
            </Container>
        </div>
    ) : null
}

export default Post