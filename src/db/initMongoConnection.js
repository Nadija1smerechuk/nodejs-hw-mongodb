// mongodb+srv://nadija1smerechuk:Xva0GcKZCpLM6rnw@cluster0.nxfre.mongodb.net/my-contacts?retryWrites=true&w=majority&appName=Cluster0
import mongoose from 'mongoose';
import { env } from '../utils/env.js';


export const initMongoConnection = async () => {
    try {
        const user = env('MONGODB_USER');
        const password = env('MONGODB_PASSWORD');
        const url = env('MONGODB_URL');
        const db = env('MONGODB_DB');

        await mongoose.connect
        // (`mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`)
        (`mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Mongo connection successfully established!");
    }
    catch(error) {
        console.log('Error while setting up mongo connection', error);
        throw error;
    }

}

// mongodb+srv://nadija1:<db_password>@cluster0.9guaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
