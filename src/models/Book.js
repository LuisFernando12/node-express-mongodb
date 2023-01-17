import {model, Schema} from 'mongoose';

const BookSchema = new Schema({
    id: {type: String},
    title:{type: String, required: true},
    author: {type: Schema.Types.ObjectId,ref: 'authors', required: true},
    publishingHouse: {type: Schema.Types.ObjectId,ref: 'publishingHouse', required: true},
    pageNumber: {type: Number}
});

const Books = model('books', BookSchema);
export default Books;