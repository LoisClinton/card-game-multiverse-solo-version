const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Attack } = require("./Attack");
const { db } = require("../db/config");

// define in global scope
let attack;

// clear db and create new attack before tests
beforeAll(async () => {
  await db.sync({ force: true });
  attack = await Attack.create({
    name: "myAttack",
    title: "vaporize",
    mojoCost: 47,
    staminaCost: 37,
  });
});

// clear db after tests
// afterAll(async () => await db.sync({ force: true }));

// TESTS
describe("Attack", () => {
  it("has an id", async () => {
    expect(attack).toHaveProperty("id");
  });

  it("Is an instnce of Attack", async () => {
    expect(attack).toBeInstanceOf(Attack);
  });

  it("has the correct name", async () => {
    expect(attack.name).toBe("myAttack");
  });

  it("has the correct title", async () => {
    expect(attack.title).toBe("vaporize");
  });

  it("has the correct mojoCost", async () => {
    expect(attack.mojoCost).toBe(47);
  });

  it("has the correct staminaCost", async () => {
    expect(attack.staminaCost).toBe(37);
  });

  /**
   * Create more tests
   */
});
