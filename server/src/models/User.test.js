const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { User } = require("./index.js");
const { db } = require("../db/config");

// define in global scope
let user;

// clear db and create new user before tests
beforeAll(async () => {
  // await seed(); // function inside seed that isnt made yet
  await db.sync({ force: true });
  user = await User.create({ username: "gandalf" });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

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

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
  // A User can be loaded with its Deck (TODO/EXTESION)
});
