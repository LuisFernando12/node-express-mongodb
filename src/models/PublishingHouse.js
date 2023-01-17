import {model, Schema} from 'mongoose';

const publishingHouseSchema = new Schema({
    id:{type: String},
    name:{type: String, required: true},
    origin:{type: String}
});

const publishingHouse = model('publishingHouse',publishingHouseSchema);

export default publishingHouse;