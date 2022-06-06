const mongoose = require('mongoose');

mongoose.connect
        ('mongodb+srv://camillegranier:40076900@cluster0.mzdyf.mongodb.net/test',)
        .then(() => {
            console.log('Connected to MongoDB')
        })
        .catch((err) => {
            console.log('Failed to connect to MongoDB ' + err)
        })