import cloudinary from "./cloudinary";



export default async function uploadPhoto (file: File) {
    // Convert File → Buffer → Base64 
        const bytes = await file.arrayBuffer(); 
        const buffer = Buffer.from(bytes); 
        const base64 = buffer.toString("base64"); 
        const dataURI = `data:${file.type};base64,${base64}`;
    const data = await cloudinary.uploader.upload(dataURI, {
      folder: "photos",
    });
    return data.secure_url;
};