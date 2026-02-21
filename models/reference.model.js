import mongoose from 'mongoose';

const referenceSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    }
});

const Reference = mongoose.model('Reference', referenceSchema);

export default Reference;