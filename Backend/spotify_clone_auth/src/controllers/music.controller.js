const musicModel = require('../models/music.model');
const uploadFile = require('../services/storage.service');
const jwt = require('jsonwebtoken');

async function createMusic(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== 'artist') {
            return res.status(403).json({ message: 'No access' });
        }

        const { title } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ message: 'Please upload a music file' });
        }

        const result = await uploadFile(file);

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: decoded.id,
        });

        return res.status(200).json({
            message: 'Created successfully',
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist,
            },
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Upload failed',
            error: err.message,
        });
    }
}

module.exports = { createMusic };