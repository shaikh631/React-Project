import conf from "../conf/conf";
import { Client, Databases , ID,Storage , Query} from "appwrite";

export class Service{

    client = new Client();
    databases; 
    bucket;

    constructor(){
        this.client
           .setEndpoint(conf.AppWrite) // Your API Endpoint
            .setProject(conf.AppWriteProjectID); // Your project ID

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({Title , slug , context , featureImage , status , userID}) {
        try {
            return await this.databases.createDocument(
                conf.AppWriteDataBaseId,
                conf.AppWriteCollection,
                slug,
                {
                    Title , 
                    context, 
                    featureImage, 
                    status,
                    userID
                }
            )
            
            
        } catch (error) {
            console.log("Appwrite Service :: Create Post :: error" , error);
            throw error
        }

    }
     async updatePost(slug ,{Title  , context , featureImage , status }) {
      try {
            return await this.databases.updateDocument(
                conf.AppWriteDataBaseId,
                conf.AppWriteCollection,
                slug,
                {
                    Title , 
                    context, 
                    featureImage, 
                    status, 
                }
            )
            
            
        } catch (error) {
            console.log("Appwrite Service :: Update Post :: error" , error);
            throw error
        }
     }

        async deletePost(slug) {
      try {
            return await this.databases.deleteDocument(
                conf.AppWriteDataBaseId,
                conf.AppWriteCollection,
                slug
            )
            return true;
            
            
        } catch (error) {
            console.log("Appwrite Service :: Delete Post :: error" , error);
            throw error;
            return false
        }
     }

          async getPost(slug) {
      try {
            return await this.databases.getDocument(
                conf.AppWriteDataBaseId,
                conf.AppWriteCollection,
                slug
            )
            return true;
            
            
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error" , error);
            throw error;
            return false
        }
     }
     async getPosts(queries = [Query.equal("status" , "active")]) {
      try {
            return await this.databases.listDocuments(
                conf.AppWriteDataBaseId,
                conf.AppWriteCollection,
                queries
            )
            return true; 
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error" , error);
            throw error;
            return false
        }
     }
     async uploadImage(file){
        try {
           return await this.bucket.createFile(
                conf.AppWriteBucketID,
                ID.unique(),
                file
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite Service :: uploadImage :: error" , error);
            throw error;
            return false
        }
     }
          async deleteImage(fileID){
        try {
           return await this.bucket.deleteFile(
                conf.AppWriteBucketID,
                fileID
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite Service :: deleteImage :: error" , error);
            throw error;
            return false
        }
     }
     getFilePreviewURL(fileID){
        try {
           return this.bucket.getFilePreview(conf.AppWriteBucketID , fileID);
            
        } catch (error) {
            console.log("Appwrite Service :: geqtFilePreviewURL :: error" , error);
            throw error;
            return null
        }
     }
      
}

const service = Service();

export default service ;