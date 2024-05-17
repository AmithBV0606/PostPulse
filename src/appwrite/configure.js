import config from "../config/config"
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // For document(Post) creation
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, // Here we're using slug as Document Id
                {
                    title, content, featuredImage, status, userId
                }

            )
        } catch (error) {
            console.log("Appwrite service :: DocumentCreation :: error", error)
        }
    }

    // For Updating the document(Post)
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: DocumentUpdation :: error", error)
        }
    }

    // For Deleting a document(Post)
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: DocumentDeletion :: error", error)
            return false
        }
    }

    // For Getting a single document(Post)
    async gePost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: DocumentRetrieve(GET) :: error", error)
        }
    }

    // __________________________________________________________________________________________________________

    // For Getting all the documents(Post) which are active
    async getPosts(queries = [Query.equal('status', 'active')]){
      try {
        return await this.databases.listDocuments(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            // [
            //     Query.equal('status', 'active')
            // ]
            queries
        )
      } catch (error) { 
        console.log("Appwrite service :: DocumentRetrieve(GET)Query :: error", error)
        return false;
      }
    }

    // _________________________________________________________________________________________________________

    // For Uploading Images/Files service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: UploadFile :: error", error)
            return false;
        }
    } 

    // For Deleting Images/Files service
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: DeleteFile :: error", error)
            return false
        }
    }

    // For previewing the Images/Files service
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;