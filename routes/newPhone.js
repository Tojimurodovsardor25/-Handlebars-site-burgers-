const express = require('express')
const router = express()

router.get('/', (req, res) => {
    res.render('new', {
        title: 'New',
        isNew: true
    })
})

module.exports = router