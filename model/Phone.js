const fs = require("fs");
const { resolve } = require("path");
const path = require("path");
const { v4: uuid } = require("uuid");

class Phone {
  constructor(name, price, img) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.id = uuid();
  }

  toJSON() {
    return {
      name: this.name,
      price: this.price,
      img: this.img,
      id: this.id,
    };
  }

  async save() {
    const phones = await Phone.getAll();
    phones.push(this.toJSON());
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "db.json"),
        JSON.stringify(phones) /* string da jo'natish */,
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "data", "db.json"),
        "utf-8",
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(data)); // massiv
          }
        }
      );
    });
  }

  static async getById(id) {
    const allData = await Phone.getAll();
    return allData.find((c) => c.id === id);
  }
  static async update(body) {
    const phones = await Phone.getAll();

    const indx = phones.findIndex((c) => c.id === body.id);

    phones[indx] = body;

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "db.json"),
        JSON.stringify(phones),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }
}

module.exports = Phone;
