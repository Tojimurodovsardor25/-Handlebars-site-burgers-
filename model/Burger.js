const fs = require('fs')
const path = require('path')
const {
    v4: uuid
} = require('uuid')

class Burger {
    constructor(name, price, img) {
        this.name = name
        this.price = price
        this.img = img
        this.id = uuid()
    }
    toJSON() {
        return ({
            name: this.name,
            price: this.price,
            img: this.img,
            id: this.id
        })
    }
    async save() {
        const burgers = await Burger.getAll()
        burgers.push(this.toJSON())
        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, '..', 'data', 'db.json')),
                JSON.stringify(burgers),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
        })
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '..', 'data', 'db.json'), 'utf-8', (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(data))
                }
            })
        })
    }

    static async getById(id) {
        const allData = await Burger.getAll()
        return allData.find(c => c.id === id)
    }

    static async update(body) {
        const burgers = await Burger.getAll()
        const indx = burgers.findIndex(c => c.id === body.id)
        burgers[indx] = body

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'db.json'),
                JSON.stringify(burgers),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

}

module.exports = Burger