const fs = require('fs')
const path = require('path')
const { v4: uuid } = require('uuid')

class Phone {
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
        const phones = await Phone.getAll()
        phones.push(this.toJSON())
        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, '..', 'data', 'db.json'),
                JSON.stringify(phones), /* string da jo'natish */
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

}

module.exports = Phone