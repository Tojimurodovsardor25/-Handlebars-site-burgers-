const fs = require('fs')
const path = require('path')
const { v4: uuid } = require('uuid')

class Burger {
    constructor(name, price, img) {
        this.name = name
        this.price = price
    }
}