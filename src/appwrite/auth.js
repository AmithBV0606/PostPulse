import config from "../config/config"
import { Client, Account, ID } from "appwrite";

export class AuthService { // Service
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // For SignUp
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if(userAccount){
                // call another method
                return this.login({email, password})
            } else {
                return userAccount;
            }

        } catch (error) {
            console.log("Appwrite service :: SignUp :: error", error)
        }
    }

    // For LogIn/SignIn
    async  login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("Appwrite service :: LogIn :: error", error)
        }
    }

    // To let user know if they are loggedIn or not 
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }

        return null;
    }

    // For  Logout
    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }
}

const authService = new AuthService(); // Object

export default authService;