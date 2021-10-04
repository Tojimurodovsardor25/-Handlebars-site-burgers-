const express = require('express')
const router = express()
const Phone = require('../model/Phone')

router.get('/', async (req, res) => {
    const allPhones = await Phone.getAll()
    console.log(allPhones);

    res.render('home', {
        title: 'Home',
        isHome: true,
        allPhones
    })
})

module.exports = router