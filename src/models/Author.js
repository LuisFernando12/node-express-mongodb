import {model, Schema} from 'mongoose';

const AuthorSchema = new Schema({
    id:{type: String},
    name: {type: String, required:true},
    nationality: {type: String}
},{versionKey:false});

const Authors = model('authors', AuthorSchema);

export default Authors;