import fs from "fs";

export const readInput = (fileName: string): string => {
  return fs.readFileSync(`inputs/${fileName}`).toString();
};

export const getColumnsFromInput = (input: string, del: string): string[][] => {
  const lines = input.split("\n");
  const columns: string[][] = [];

  for (const line of lines) {
    const values = line.split(del);

    for (let i = 0; i < values.length; i++) {
      if (!columns[i]) columns[i] = [values[i]];
      else columns[i].push(values[i]);
    }
  }

  return columns;
};
