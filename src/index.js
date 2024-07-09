const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes/routes')

const PORT = 3000


//app.use
app.use(express.json())
app.use(router)
app.use(express.static(path.join(__dirname, '../public')))

app.listen( PORT, () => {
    console.log('servidor iniciado')
} )
