const regex = /freeCodeCamp/gi;
const testStr = regex.test("FREECODECAMP");

const matchStr = "we love freecodecamp, freecodeCamp is awesome".match(regex);

const regex2 = /freecodecamp/;
const str = "freecodecamp is awesome";
const replaced = str.replace(regex2, "freeCodeCamp");

console.log(matchStr);
