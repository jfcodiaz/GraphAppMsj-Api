const mongoose = require('mongoose');

console.log(process.env.MONGO_URI);
module.exports = async () => {
    return mongoose.connect(process.env.MONGO_URI)
}