import conf from "../conf/conf";
import { Client, Account , ID} from "appwrite";

export class AuthService{ 

    client = new Client();
    account ; 

    constructor(){
        this.client
           .setEndpoint(conf.AppWrite) // Your API Endpoint
            .setProject(conf.AppWriteProjectID); // Your project ID

        this.account = new Account(this.client);
    }

    // Create Account 
    async createAccount({email , password , name }){
        try {
             const userAccount = await this.account.create(ID.unique() , email , password , name);
             if(userAccount){
                // Direct Login 
               return this.loginAccount({email , password});
             }else{
                return userAccount
             }
        } catch (error) {
            console.log("Appwrite :: Create Account")
            throw error
        }
    }

    async loginAccount({email , password}){
        try {
           return  await this.account.createEmailPasswordSession(email , password);
            
        } catch (error) {
            console.log("Appwrite :: Login Account")
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
            console.log("Appwrite :: Get Current User ")
        }
        return null
    }

    async passwordRecovery(){
        try {
            this.account.createRecovery({email , name});
            console.log("Account Find SuccessFully");
            
        } catch (error) {
            throw error
            console.log("Appservice :: Account Cannot Find")
        }
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
            console.log("Appservice :: logout :: error " , error)
        }
    }


}
const authSevice = new AuthService();

export default authSevice