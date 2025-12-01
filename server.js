const express = require('express')
const app = express()
const PORT = 3000
const termsRouter = require('./routes/terms')
const notFound = require('./middlewares/notFound')
const serverError = require('./middlewares/serverError')

// register the body parser
app.use(express.static('public'))

// register the body parser middleware
app.use(express.json())

// Server listens on port 3000
app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`);
})

// your first route here
app.get('/', (req, res) => {
    res.send('Terms API server')
})

// register your terms router on a specific path
app.use('/api/terms', termsRouter) // localhost:3000/api/terms

app.use(notFound)
app.use(serverError)    