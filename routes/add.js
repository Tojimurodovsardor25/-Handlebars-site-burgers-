const express = require('express')
const Burger = require('../model/Burger')
const router = express()
const Phone = require('../model/Burger')

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    const burger = new Phone(req.body.name, req.body.price, req.body.img, req.body.title)
    await burger.save()
    res.redirect('/')
})

router.get('/:id/edit', async (req, res) => {
    const burger = await Burger.getById(req.params.id)

    res.render('edit', {
        name: burger.name,
        price: burger.price,
        img: burger.img,
        title: burger.title,
        id: burger.id
    })
})

router.post('/edit', async (req, res) => {
    await Burger.update(req.body)

    res.redirect('/')
})


router.get('/:id', async (req, res) => {
    const burger = await Burger.getById(req.params.id)

    res.render('burger', {
        layout: 'burger',
        name: burger.name,
        price: burger.price,
        img: burger.img,
        title: burger.title,
        id: burger.id
    })
})



module.exports = router