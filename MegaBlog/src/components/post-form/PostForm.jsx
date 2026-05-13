import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isLoggedIn = useSelector((state) => state.auth.status);

    // Move early return BEFORE any hooks are called
    if (!isLoggedIn) {
        return (
            <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
                    <p className="text-gray-600 mb-8">Please log in to create posts.</p>
                    <button 
                        onClick={() => navigate("/login")}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.Title || "",
            slug: post?.$id || "",
            content: post?.Context || "",
            status: post?.status || "active",
        },
    });

    const submit = async (data) => {
      if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.FeaturedImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="w-full bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{post ? "Edit Post" : "Create New Post"}</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main content area */}
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <Input
                            label="Title"
                            placeholder="Enter post title"
                            className="mb-0"
                            {...register("title", { required: true })}
                        />
                    </div>
                    
                    <div>
                        <Input
                            label="Slug"
                            placeholder="auto-generated-slug"
                            className="mb-0"
                            {...register("slug", { required: true })}
                            onInput={(e) => {
                                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                            }}
                        />
                        <p className="text-xs text-gray-500 mt-2">URL-friendly slug (auto-generated from title)</p>
                    </div>
                    
                    <div>
                        <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
                    </div>
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                        <div className="mb-6">
                            <Input
                                label="Featured Image"
                                type="file"
                                className="mb-0"
                                accept="image/png, image/jpg, image/jpeg, image/gif"
                                {...register("image", { required: !post })}
                            />
                            <p className="text-xs text-gray-500 mt-2">PNG, JPG, JPEG or GIF (max 5MB)</p>
                        </div>
                        
                        {post && (
                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-700 mb-3">Current Image</p>
                                <img
                                    src={appwriteService.getFilePreview(post.FeaturedImage)}
                                    alt={post.Title}
                                    className="rounded-lg w-full object-cover h-40"
                                />
                            </div>
                        )}
                        
                        <div className="mb-6">
                            <Select
                                options={["active", "inactive"]}
                                label="Status"
                                className="mb-0"
                                {...register("status", { required: true })}
                            />
                        </div>
                        
                        <Button 
                            type="submit" 
                            bgColor={post ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"} 
                            className="w-full text-white font-semibold py-3 rounded-lg transition-colors"
                        >
                            {post ? "Update Post" : "Publish Post"}
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
}
