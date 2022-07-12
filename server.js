const express = require ('express')
const app = express()
require('dotenv').config()
//connect database
require('./config/database')

// ===== ROUTES =====
//Services
app.use('/api/v1/services', require('./routes/api/services.js'))

// ===== PORT =====
const port = 8080;

app.listen(port, () => console.log(`Express app running on port ${port}`))
