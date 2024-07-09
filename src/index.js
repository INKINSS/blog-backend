const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/routes');
const ejs = require('ejs');

const PORT = 3000;

// Set view engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views'));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log('servidor iniciado');
});
