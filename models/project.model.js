import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completion: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;