import { readInput } from "../utils/index";

export const day02 = () => {
  const input = readInput("day02.txt");
  const lines = input
    .split("\n")
    .map((l) => l.split(" ").map((num) => parseInt(num)));

  return {
    safeLevels: calculateSafeLevels(lines),
    safeLevelsWithDampener: calculateSafeLevels(lines, true),
  };
};

const calculateSafeLevels = (lines: number[][], dampen = false) => {
  return lines.reduce((acc, curr) => {
    if (isSafe(curr) || (dampen && isSafeWithDampener(curr))) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

const isSafeWithDampener = (line: number[]) => {
  for (let i = 0; i < line.length; i++) {
    const newLine = [...line.slice(0, i), ...line.slice(i + 1)];

    if (isSafe(newLine)) return true;
  }
  return false;
};

const isSafe = (line: number[]): boolean => {
  let isIncreasing;
  let safe = true;

  for (let i = 0; i < line.length - 1; i++) {
    const currNum = line[i];
    const nextNum = line[i + 1];

    if (currNum === nextNum) {
      return false;
    }

    if (typeof isIncreasing !== "boolean") {
      if (currNum < nextNum) {
        isIncreasing = true;
      } else {
        isIncreasing = false;
      }
    }

    if ((isIncreasing && currNum > nextNum) || nextNum - currNum > 3) {
      safe = false;
    }

    if ((!isIncreasing && currNum < nextNum) || currNum - nextNum > 3) {
      safe = false;
    }
  }

  return safe;
};
