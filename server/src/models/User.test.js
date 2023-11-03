const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { User, Deck, seed } = require("./index.js");
const { db } = require("../db/config");

// define in global scope
let user;

// clear db and create new user before tests
beforeAll(async () => {
  // await seed(); // function inside seed that isnt made yet
  // await db.sync({ force: true });
  user = await User.create({ username: "gandalf" });
  const users = await User.bulkCreate([
    { username: "v1per" },
    { username: "trinity" },
    { username: "mr_spoon" },
  ]);
});

// clear db after tests
// afterAll(async () => await db.sync({ force: true }));

describe("User", () => {
  it("Is an instnce of User", async () => {
    expect(user).toBeInstanceOf(User);
  });

  it("has a", async () => {
    expect(user).toHaveProperty("id");
  });

  it("has the correct username", async () => {
    expect(user.username).toBe("gandalf");
  });

  // EXTENSIONS
  it("A User can be loaded with its Deck", async () => {
    const deck = await Deck.create({ name: "myDeck", xp: 4567 });
    await user.setDeck(deck);
    const userDeck = await user.getDeck();
    expect(userDeck).toBeInstanceOf(Deck);
  });

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
});
