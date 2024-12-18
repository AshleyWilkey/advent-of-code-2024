import { day01 } from "./days/day01";
import { day02 } from "./days/day02";
import { day03 } from "./days/day03";

const main = () => {
  console.log(`Advent of Code 2024`);
  console.log(`day01: ${JSON.stringify(day01(), null, 2)}`);
  console.log(`day02: ${JSON.stringify(day02(), null, 2)}`);
  console.log(`day03: ${JSON.stringify(day03(), null, 2)}`);
};

main();
