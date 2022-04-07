// modules
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('./routes/route.js')
const { default: mongoose } = require('mongoose')
// config 
const PORT = process.env.PORT || 4000
dotenv.config()
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// database
mongoose.connect(process.env.MONGODB_CLUSTER_KEY)
const db = mongoose.connection
db.once('open', () => {
    console.log('Database is Connected')
})

// routes
app.use('/api', router)

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Server is running...'
    })
})



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})