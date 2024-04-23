const mongoose = require('mongoose')

const MONGODB_URI="mongodb+srv://suryanshsingh1807:avirajhasbigboobs@cluster0.yvtula8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectdb =async () => {
    try {
        const connectioninstance = await mongoose.connect(MONGODB_URI)
        console.log('Connected to Mongo DB');
    } catch (error) {
        console.log('Connection to mongodb failed');
    }
}

module.exports = connectdb