const express = require('express')
const router = express()
const Phone = require('../model/Phone')

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    console.log(req.body.name);
    const phone = new Phone(req.body.name, req.body.price, req.body.img)
    await phone.save()
    res.redirect('/')
})

module.exports = router