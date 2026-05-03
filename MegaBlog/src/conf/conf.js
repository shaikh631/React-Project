const conf = {
    AppWrite : String(import.meta.env.VITE_APPWRITE_URL),
    AppWriteProjectID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    AppWriteDataBaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    AppWriteCollection : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
   AppWriteBucketID : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),


}

export default conf 