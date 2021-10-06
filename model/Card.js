const path = require("path");
const fs = require("fs");
const { resolve } = require("path");
const { rejects } = require("assert");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "card.json"
);

class Card {
  static async add(phone) {
    const card = await Card.fetch();
    const idx = card.phones.findIndex((c) => c.id === phone.id); // number // 0

    const candidate = card.phones[idx]; // 13

    if (candidate) {
      /// Bu telefon karzinada mavjud
      candidate.count++; // qo'shish
      card.phones[idx] = candidate;
    } else {
      phone.count = 1;
      card.phones.push(phone);
    }

    card.price += +phone.price;

    return new Promise((resolve, reject) => {});
  }
}
