const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Deck } = require("./Deck");
const { db } = require("../db/config");

// define in global scope
let deck;

// clear db and create new deck before tests
beforeAll(async () => {
  await db.sync({ force: true });
  deck = await Deck.create({ name: "myDeck", xp: 4567 });
});

// clear db after tests
// afterAll(async () => await db.sync({ force: true }));

// TESTS
describe("Deck", () => {
  it("Is an instnce of Deck", async () => {
    expect(deck).toBeInstanceOf(Deck);
  });

  it("has an id", async () => {
    expect(deck).toHaveProperty("id");
  });

  it("has the correct name", async () => {
    expect(deck.name).toBe("myDeck");
  });

  it("has the correct xp", async () => {
    expect(deck.xp).toBe(4567);
  });

  /**
   * Create more tests
   */

  // A Deck can be loaded with its Cards
});
