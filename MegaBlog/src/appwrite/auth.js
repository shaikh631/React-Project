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
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            console.log("Appwrite :: Create Account :: Success", userAccount)
            return userAccount;
        } catch (error) {
            console.log("Appwrite :: Create Account :: error", error?.message || error)
            return null
        }
    }

    async loginAccount({email , password}){
        try {
           const session = await this.account.createEmailPasswordSession(email , password);
           console.log("Appwrite :: Login Account :: Success", session)

           // Try to create a JWT for authenticated requests as a fallback to cookies.
           try {
               const jwtResponse = await this.account.createJWT();
               if (jwtResponse && jwtResponse.jwt) {
                   this.client.setJWT(jwtResponse.jwt);
                   console.log("Appwrite :: JWT created and set successfully.")
               }
           } catch (jwtError) {
               console.warn("Appwrite :: JWT creation failed.", jwtError?.message || jwtError)
           }

           // Verify session was created - small delay to ensure cookie is set
           await new Promise(resolve => setTimeout(resolve, 300))
           const checkUser = await this.account.get().catch(() => null)
           if (!checkUser) {
               console.warn("Appwrite :: Session created but user not authenticated. Check Appwrite Console CORS settings and allowed origins.")
           } else {
               console.log("Appwrite :: Session verified. User is authenticated.")
           }
           return session;
        } catch (error) {
            console.log("Appwrite :: Login Account :: error", error?.message || error)
            return null
        }
    }

    // alias for compatibility with components using `login`
    async login(credentials){
        return this.loginAccount(credentials)
    }

    // Diagnostic: Check active sessions
    async listSessions(){
        try {
            const sessions = await this.account.listSessions();
            console.log("Appwrite :: Active Sessions", sessions)
            return sessions;
        } catch (error) {
            console.log("Appwrite :: List Sessions error", error?.message || error)
            return null
        }
    }

    async getCurrentUser(){
        try {
            // Retry logic - sometimes takes a moment for session to be recognized
            for (let attempt = 0; attempt < 3; attempt++) {
                try {
                    const user = await this.account.get();
                    console.log("Appwrite :: Get Current User :: Success", user)
                    return user;
                } catch (e) {
                    if (attempt < 2) {
                        console.log(`Appwrite :: Get Current User :: attempt ${attempt + 1} failed, retrying...`)
                        await new Promise(resolve => setTimeout(resolve, 200))
                    } else {
                        throw e
                    }
                }
            }
        } catch (error) {
            console.log("Appwrite :: Get Current User :: error", error?.message || error)
            console.log("Debugging info:")
            console.log("- Check Appwrite Console: Project → Settings → Allowed Origins (add http://localhost:517*)")
            console.log("- Session may not be persisting. Check browser DevTools Network tab for Set-Cookie headers.")
            return null
        }
    }

    async passwordRecovery({email, url}){
        try {
            return await this.account.createRecovery(email, url);
        } catch (error) {
            console.log("Appwrite :: passwordRecovery :: error", error)
            return null
        }
    }
    async logout(){
        try {
            await this.account.deleteSessions();
            return true
        } catch (error) {
            console.log("Appwrite :: logout :: error " , error)
            return false
        }
    }


}
const authSevice = new AuthService();

export default authSevice