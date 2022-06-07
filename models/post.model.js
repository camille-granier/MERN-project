const mongoose = require('mongoose');

postSchema = new mongoose.Schema(
    {
        posterId: {
            type: String,
            required: true
        }
    },
    {
        message: {
            type: String,
            required: true,
            maxLength: 500
        }
    },
    {
        picture: {
            type: String
        }
    },
    {
        video: {
            type: String
        }
    },
)