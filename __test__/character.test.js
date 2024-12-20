import { Character } from "../src/character.js";

test("checking if name less than 2 symbols", () => {
  expect(() => new Character("M", "Magician")).toThrow("Error");
});

test("checking if name more than 10 symbols", () => {
  expect(() => new Character("MyMagicianCharacter", "Magician")).toThrow(
    "Error"
  );
});
// test("checking the length of name", () => {
//   expect(
//     () =>
//       new Character("M", "Magician") ||
//       new Character("MyMagicianCharacter", "Magician")
//   ).toThrow("Error");
// });

test("checking the correct amount of symbols in a name", () => {
  const result = new Character("Name", "Magician");
  expect(result.name.length > 2).toBe(true);
});

test("checking the type", () => {
  expect(() => new Character("Gwen", "Mag")).toThrow("Error");
});

test("checking the correct type", () => {
  const result = new Character("Name", "Magician");
  expect(result.type).toBe("Magician");
});

test("checking if levelUp throws error", () => {
  const result = new Character("Mag", "Magician");
  result.health = 0;
  expect(() => result.levelUp()).toThrowError(
    new Error("Нельзя повысить уровень умершего")
  );
});

test("checking if levelUp works", () => {
  const result = new Character("Mag", "Magician");
  result.attack = 10;
  result.defence = 10;
  result.levelUp();
  expect(result.health).toBe(100);
  expect(result.attack).toBe(12);
  expect(result.defence).toBe(12);
  expect(result.level).toBe(2);
});

test("checking if damage works", () => {
  const result = new Character("Mag", "Magician");
  result.defence = 10;
  result.damage(50);
  expect(result.health).toBe(55);
});

test("checking if damage is too strong", () => {
  const result = new Character("Mag", "Magician");
  result.defence = 10;
  result.damage(120);
  expect(result.health).toBe(0);
});
