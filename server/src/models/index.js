const { User } = require("./User");
const { Attack } = require("./Attack");
const { Deck } = require("./Deck");
const { Card } = require("./Card");
// import the rest of your models above

//set up the associations here

// Associate Users and Decks with a one-to-one relationship.
//     Each User may create exactly one Deck
User.hasOne(Deck); //one-to-one relationship
Deck.belongsTo(User); // one-to-one relationship

// Associate Decks and Cards with a one-to-many association
//     Each Deck may contain many Cards. A Card may only belong to one Deck.
Card.belongsTo(Deck); // one-to-one relationship
Deck.hasMany(Card); // one-to-many relationship

// Associate Cards and Attacks with a many-to-many association
//     Each Card may have many Attacks. Each Attack may belong to many Cards.
Card.belongsToMany(Attack, { through: "attack-card" }); // one-to-many relationship
Attack.belongsToMany(Card, { through: "attack-card" }); // one-to-many relationship

// and then export them all below
module.exports = { User, Attack, Deck, Card };
