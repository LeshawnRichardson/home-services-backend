const express = require ('express')
const app = express()
require('dotenv').config()
//connect database
require('./config/database')

// ===== MIDDLEWARES =====
app.use(express.json())

// Check if token and create req.user
app.use(require('./config/checkToken'))

// ===== ROUTES =====
// Users
app.use('/api/v1/users', require('./routes/api/users'))

// Protect API routes below from authorized users
const ensureLoggedIn = require('./config/ensureLoggedIn')

//Services
app.use('/api/v1/services', require('./routes/api/services'))

// Users
app.use('/api/v1/users', require('./routes/api/users'))

// ===== PORT =====
const port = 8080;

app.listen(port, () => console.log(`Express app running on port ${port}`))
