const path = require("path");
const fs = require("fs");
const {
  resolve
} = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "card.json"
);

class Card {
  static async add(burger) {
    const card = await Card.fetch();
    const idx = card.burgers.findIndex((c) => c.id === phone.id); // number // 0

    const candidate = card.burgers[idx]; // 13

    if (candidate) {
      /// Bu telefon karzinada mavjud
      candidate.count++; // qo'shish
      card.burgers[idx] = candidate;
    } else {
      burger.count = 1;
      card.burgers.push(burger);
    }

    card.price += +burger.price;

    return new Promise((resolve, reject) => {
      fs.writeFile(p, JSON.stringify(card), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  static async remove(id) {
    const card = await Card.fetch()
    const idx = card.burgers.findIndex(burger => burger.id === id)
    const burger = card.burgers[idx]

    if (burger.count === 1) {
      card.burgers = card.burgers.filter(burger => burger.id !== id)
    } else {
      card.burgers[idx].count--
    }
    card.price -= burger.price
    return new Promise((resolve, reject) => {
      fs.writeFile(p, JSON.stringify(card), (err) => {
        if (err) {
          reject(err)
        } else {
          resolve(card)
        }
      })
    })
  }

  static async fetch() {
    return new Promise((resolve, reject) => {
      fs.readFile(p, "utf-8", (err, content) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(content));
        }
      });
    });
  }
}

module.exports = Card;