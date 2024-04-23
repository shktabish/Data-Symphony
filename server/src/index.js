require('dotenv').config()
const connectdb = require('./db/db')
const app = require('./app')

const PORT=5000

connectdb()
.then(() => {
    app.listen(PORT, ()=>{
        console.log(`server connected to port ${PORT}`);
    })
})
.catch((err)=>{
    console.log('Error in Connecting to DB');
})