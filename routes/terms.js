const express = require('express')
const router = express.Router()

// index
router.get('/', (req, res) => {
    res.send('Show all terms here')
})

// show
router.get('/:id', (req, res) => {
    res.send('Show terms id ' + req.params.id)
})

// store
router.post('/:id', (req, res) => {
    console.log(req.body);
    res.send('Store terms')
})

//update
router.put('/:id', (req, res) => {
    res.send('Update terms id ' + req.params.id)
})

// destroy
router.delete('/:id', (req, res) => {
    res.send('Destroy terms id ' + req.params.id)
})

// export your router instance
module.exports = router