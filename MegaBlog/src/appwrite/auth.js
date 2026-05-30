import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.AppWrite)
            .setProject(conf.AppWriteProjectID);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // After creating the user, create a session so we can call account methods
                // that require an authenticated context (like sending verification).
                console.log("Account created. Logging in...")
                const session = await this.login({ email, password });
                try {
                    await this.account.createEmailVerification({
                        url: window.location.origin + "/login"
                    });
                } catch (verificationError) {
                    // Verification for newly-created user may fail if server rules require
                    // admin scopes. Log and continue — user was created and logged in.
                    console.warn("Appwrite service :: createVerification warning", verificationError);
                }

                return session;
            }
            return userAccount;
        } catch (error) {
            throw error;
        }
    }


    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async createRecovery({ email, url }) {
        try {
            return await this.account.createRecovery({
                email,
                url
            });
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

    // Update password requires the old password for verification, so we can be sure the user is who they say they are.
    async UpdatePassword({ oldPassword, newPassword }) {
        try {
            await this.account.updatePassword(oldPassword, newPassword);
            return true;
        } catch (error) {
            console.log("Appwrite serive :: UpdatePassword :: error", error);
            return false;
        }
    }

    async updateRecovery({ userId, secret, password, passwordAgain }) {
        try {
            return await this.account.updateRecovery({
                userId,
                secret,
                password,
                passwordAgain
            });
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService