import mongoose from "mongoose";

export const katasEntity = () => {
    let userSchema = new mongoose.Schema(
        {
            user_id: Object,
            name: String,
            description: String,
            level: Number,
            date: Date,
            valoration: Number,
            Chances: Number,
        }
    );
    return mongoose.model('Users', userSchema);
};