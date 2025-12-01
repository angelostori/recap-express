const express = require('express')
const router = express.Router()

// index
router.get('/', (req, res) => {
    res.send('Show all terms here')
})



// export your router instance
module.exports = router