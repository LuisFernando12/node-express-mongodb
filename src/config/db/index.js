import * as dotenv from 'dotenv' 
import mongoose from 'mongoose';
dotenv.config();


mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD_CLOUD}@node-express-alura.yvu4hit.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

const connection = mongoose.connection;

export default connection;
