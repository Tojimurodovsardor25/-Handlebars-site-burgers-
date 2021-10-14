const { Router } = require('express')
const router = Router()
const Burger = require('../model/Burger')
const Card = require('../model/Card')

router.post('/add', async (req, res) => {
    const burger = await Burger.getById(req.body.id)
    await Card.add(burger)
    res.redirect('/card/add')
})

router.delete('/remove/:id', async (req, res) => {
    const card = await Card.remove(req.body.id)
    res.status(200).json(card)
})

router.get('/add', async (req, res) => {
    const card = await Card.fetch()
    res.render(card), {
        title: 'Shopping new card',
        models: card.phones,
        price: card.price,
        isCard: true
    }
})

module.exports = router