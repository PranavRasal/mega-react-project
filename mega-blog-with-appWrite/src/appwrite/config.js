import  conf  from "../conf/conf.js";
import { Client, ID , Databases , Query , Storage } from "appwrite";

export class Service{
client = new Client();
database;
bucket;

constructor(){
    this.client
    .setEndpoint(conf.appwriteURL)
    .setProject(conf.appwriteProjectID);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
}

async createpost({title , slug , content , featureImage , status , userId}){ // create post with all necessary fields
try {
    return await this.database.createDocument(
        conf.appwriteDatabaseID,
        conf.appwriteTableID,
        slug,
        {
        title, 
        slug,
        content,
        featureImage,
        status,
        userId
        }
    )
} 
catch (error) 
{
    console.log(error);
}
}





}

const service = new Service();
export default service