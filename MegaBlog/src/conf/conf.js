const conf = {
    AppWrite: import.meta.env.VITE_APPWRITE_URL || "",
    AppWriteProjectID: import.meta.env.VITE_APPWRITE_PROJECT_ID || "",
    AppWriteDataBaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || "",
    AppWriteCollection: import.meta.env.VITE_APPWRITE_COLLECTION_ID || "",
    AppWriteUserCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID || "",
    AppWriteBucketID: import.meta.env.VITE_APPWRITE_BUCKET_ID || "",
}

if (!conf.AppWrite || conf.AppWrite === "undefined") {
    console.warn("Appwrite endpoint not set. Check VITE_APPWRITE_URL in .env")
}
if (!conf.AppWriteProjectID || conf.AppWriteProjectID === "undefined") {
    console.warn("Appwrite project ID not set. Check VITE_APPWRITE_PROJECT_ID in .env")
}

export default conf