const express = require('express')
const app = express()

const PORT = 3000

// Middleware to parse JSON request bodies
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, World!')
} )

app.listen( PORT, () => {
    console.log('servidor iniciado')
} )
