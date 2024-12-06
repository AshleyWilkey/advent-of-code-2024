import { readInput } from "../utils/index";

export const day01 = () => {
  const input = readInput("day01.txt");
  const lines = input.split("\n");
  const left: number[] = [];
  const right: number[] = [];

  for (const line of lines) {
    const [lCol, rCol] = line.split("   ");
    left.push(parseInt(lCol));
    right.push(parseInt(rCol));
  }

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  return {
    distances: calculateDistance(left, right),
    similarities: calculateSimilarities(left, right),
  };
};

function calculateDistance(lColumn: number[], rColumn: number[]) {
  const result: number[] = [];

  for (let i = 0; i < lColumn.length; i++) {
    const lCol = lColumn[i];
    const rCol = rColumn[i];

    result.push(Math.abs(lCol - rCol));
  }

  return result.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

const calculateSimilarities = (lColumn: number[], rColumn: number[]) => {
  const result: number[] = [];
  for (const lCol of lColumn) {
    let appearances = 0;
    for (const rCol of rColumn) {
      if (lCol === rCol) {
        appearances++;
      }
    }

    result.push(appearances * lCol);
  }
  return result.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};
