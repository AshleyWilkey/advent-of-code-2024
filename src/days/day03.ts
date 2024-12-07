import { readInput } from "../utils/index";

export const day03 = () => {
  const input = readInput("day03.txt");

  const regex = /mul\((\d+),(\d+)\)/g;

  const results = input.match(regex)?.map((el) => el.toString());
  const results2 = getValidMulInputs(input, regex);

  return {
    part01: calculateMulInputs(results),
    part02: calculateMulInputs(results2),
  };
};

export const calculateMulInputs = (mulInputs?: string[]) => {
  return mulInputs
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

const getValidMulInputs = (input: string, regex: RegExp) => {
  return input
    .split("do()")
    .map((exp) => exp.split("don't()")[0])
    .flatMap((exp) => exp.match(regex) || []);
};
