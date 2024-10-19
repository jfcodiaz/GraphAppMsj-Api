const mongoose = require('mongoose');

module.exports = async () => {
    return mongoose.connect(process.env.MONGO_URI)
}