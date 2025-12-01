const express = require('express')
// create a router instance
const router = express.Router()
// import your controller functions
const termsController = require('../controllers/termsController')

// index
router.get('/', termsController.index)

// show
router.get('/:id', termsController.show)

// store
router.post('/', termsController.store)

//update
router.put('/:id', termsController.update)

// destroy
router.delete('/:id', termsController.destroy)

// export your router instance
module.exports = router