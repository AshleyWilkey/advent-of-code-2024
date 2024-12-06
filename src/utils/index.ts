import fs from "fs";

export const readInput = (fileName: string) => {
  return fs.readFileSync(`inputs/${fileName}`).toString();
};
