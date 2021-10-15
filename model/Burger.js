const fs = require('fs')
const path = require('path')
const { v4: uuid } = require('uuid')

class Burger {
    constructor(name, price, img, title) {
        this.name = name
        this.price = price
        this.img = img
        this.title = title
        this.id = uuid()
    }

    toJSON() {
        return ({
            name: this.name,
            price: this.price,
            img: this.img,
            title: this.title,
            id: this.id
        })
    }

    async save() {
        const burgers = await Burger.getAll()  // eski yangi
        burgers.push(this.toJSON())
        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, '..', 'data', 'db.json'),
                JSON.stringify(burgers), /* string da jo'natish */
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                })
        })
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '..', 'data', 'db.json'), 'utf-8', (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(data))  // massiv 
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

        // console.log('Body', body);

        const indx = burgers.findIndex(c => c.id === body.id) // 0 1 2 3

        // console.log('index', indx);

        burgers[indx] = body

        // console.log('phones', phones);

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
                })
        })
    }

}

module.exports = Burger