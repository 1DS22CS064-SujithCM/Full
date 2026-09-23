const { ImageKit } = require("@imagekit/nodejs");

const ImageKitClient = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file) {
    if (!file) {
        throw new Error("No file provided for upload");
    }

    if (!process.env.IMAGEKIT_PUBLIC_KEY || !process.env.IMAGEKIT_PRIVATE_KEY || !process.env.IMAGEKIT_URL_ENDPOINT) {
        throw new Error("ImageKit environment variables are missing. Add IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, and IMAGEKIT_URL_ENDPOINT.");
    }

    const result = await ImageKitClient.files.upload({
        file: file.buffer || file,
        fileName: "music_" + Date.now(),
        folder: "yt-complete-backend/music",
        useUniqueFileName: true,
    });

    return result;
}

module.exports = uploadFile;