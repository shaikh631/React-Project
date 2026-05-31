import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.AppWrite)
        .setProject(conf.AppWriteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId , userName}){
        try {
            return await this.databases.createDocument(
                conf.AppWriteDataBaseId,
                conf.AppWriteCollection,
                slug,
                {
                    Title: title,
                    Context: content,
                    FeaturedImage: featuredImage,
                    status,
                    UserId: userId,
                    UserName: userName,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status, userName}){
        try {
            return await this.databases.updateDocument(
                conf.AppWriteDataBaseId,
                conf.AppWriteCollection,
                slug,
                {
                    Title: title,
                    Context: content,
                    FeaturedImage: featuredImage,
                    status,
                    UserName: userName,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.AppWriteDataBaseId,
                conf.AppWriteCollection,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.AppWriteDataBaseId,
                conf.AppWriteCollection,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.AppWriteDataBaseId,
                conf.AppWriteCollection,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async getUserById(userId) {
        try {
            return await this.databases.getDocument(
                conf.AppWriteDataBaseId,
                conf.AppWriteUserCollectionId,
                userId
            )
        } catch (error) {
            console.log("Appwrite service :: getUserById :: error", error);
            return null
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.AppWriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async getUserById(userId) {
        try {
            return await this.databases.getDocument(
                conf.AppWriteDataBaseId,
                conf.AppWriteUserCollectionId,
                userId
            )
        } catch (error) {
            console.log("Appwrite service :: getUserById :: error", error);
            return null
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.AppWriteBucketID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return `${conf.AppWrite}/storage/buckets/${conf.AppWriteBucketID}/files/${fileId}/view?project=${conf.AppWriteProjectID}`;
    }
}


const service = new Service()
export default service