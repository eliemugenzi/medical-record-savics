import mongoose, { Schema } from 'mongoose';

const recordSchema=new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    has_coronavirus: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    }
});

const Record = mongoose.model('Record', recordSchema);

export default Record;
