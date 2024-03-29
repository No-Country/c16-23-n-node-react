import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

async function uploadImage(filePath) {
    return await cloudinary.uploader.upload(filePath, {
        folder: "pets",
    })
}

async function deleteImage(publicId) {
    return await cloudinary.uploader.destroy(publicId)
}

export { uploadImage, deleteImage }