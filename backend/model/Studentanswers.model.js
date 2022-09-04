import mongoose from 'mongoose';

const studentanswersschema = new mongoose.Schema({
    image : {
        type : String,
    },
    name : {
        type : String,
    }
});

export default mongoose.model('studentanswers',studentanswersschema);