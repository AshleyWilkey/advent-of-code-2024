import { readInput } from "../utils/index";

export const day03 = () => {
  const input = readInput("day03.txt");

  const regex = /mul\((\d+),(\d+)\)/g;

  const results = input.match(regex);

  return results
    ?.map((result) =>
      result
        .match(/(\d+),(\d+)/g)
        ?.map((el) => el.split(","))
        .flat()
        .map((n) => parseInt(n))
        .reduce((acc, curr) => {
          if (!acc) return curr;
          else return acc * curr;
        }, 0)
    )
    .reduce((acc, curr) => acc! + curr!);
};
