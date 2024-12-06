import { lcov } from "node:test/reporters";
import { getColumnsFromInput, readInput } from "../utils/index";

export const day01 = () => {
  const input = readInput("day01.txt");
  const [left, right]: string[][] = getColumnsFromInput(input, "   ");

  const leftSorted = convertAndSort(left);
  const rightSorted = convertAndSort(right);

  return {
    distances: calculateDistance(leftSorted, rightSorted),
    similarities: calculateSimilarities(leftSorted, rightSorted),
  };
};

function convertAndSort(arr: string[]): number[] {
  return arr.map((v) => parseInt(v)).sort((a, b) => a - b);
}

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
