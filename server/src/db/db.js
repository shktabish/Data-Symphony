const mongoose = require('mongoose')

const MONGODB_URI = "mongodb+srv://shktab1sh93:tab-123@cluster2.jgx8bxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2"

const connectdb =async () => {
    try {
        const connectioninstance = await mongoose.connect(MONGODB_URI)
        console.log('Connected to Mongo DB');
    } catch (error) {
        console.log('Connection to mongodb failed');
    }
}

module.exports = connectdb