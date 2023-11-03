const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Card } = require("./index.js");
const { Attack } = require("./index.js");
const { db } = require("../db/config");

// define in global scope
let card;

// clear db and create new card before tests
beforeAll(async () => {
  // await db.sync({ force: true });
  card = await Card.create({
    name: "myCard",
    mojo: 50,
    stamina: 509,
    imgUrl: "www.this-url.com",
  });
});

// clear db after tests
// afterAll(async () => await db.sync({ force: true }));

// TESTS
describe("Card", () => {
  it("Is an instnce of Card", async () => {
    expect(card).toBeInstanceOf(Card);
  });

  it("has an id", async () => {
    expect(card).toHaveProperty("id");
  });

  it("has the correct name", async () => {
    expect(card.name).toBe("myCard");
  });

  it("has the correct mojo", async () => {
    expect(card.mojo).toBe(50);
  });

  it("has the correct stamina", async () => {
    expect(card.stamina).toBe(509);
  });

  it("has the correct imgUrl", async () => {
    expect(card.imgUrl).toBe("www.this-url.com");
  });

  //EXTENSIONS
  it("Cards can be loaded with its Attacks", async () => {
    const attack = await Attack.create({
      name: "myAttack",
      title: "vaporize",
      mojoCost: 47,
      staminaCost: 37,
    });
    await card.setAttacks(attack);
    const result = await card.getAttacks();
    expect(result[0]).toBeInstanceOf(Attack);
  });

  /**
   * Create more tests
   */
});
