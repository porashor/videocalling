import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: { type: String, required: true },
    postdata: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model("Post", postSchema);