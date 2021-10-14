const express = require('express')
const router = express()
const Burger = require('../model/Burger')

router.get('/', async (req, res) => {
    const allBurgers = await Burger.getAll()

    res.render('home', {
        title: 'Home',
        isHome: true,
        allBurgers
    })
})

module.exports = router