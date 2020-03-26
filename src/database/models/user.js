import mongoose, { Schema } from 'mongoose';

const userSchema=new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    records: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Record',
        }
    ]
});

const User = mongoose.model('User', userSchema);

export default User;
