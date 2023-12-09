import mongoose from "mongoose";

const userMsgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const UserMsg = mongoose.model("UserMsg", userMsgSchema);
