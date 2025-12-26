import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String},
    profilePic: { type: String},
    coverPic: { type: String},
    address: { type: String},
    about: { type: String},
    service: { type: String},
    phone: { type: String},
});

export default mongoose.models.VideoUser || mongoose.model("VideoUser", userSchema);