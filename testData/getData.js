import fs from 'fs';

export function getJsonTestData(name) {
  return fs.readFileSync(`./testData/json/${name}.json`).toString();
}

export function getYmlTestData(name) {
  return fs.readFileSync(`./testData/yml/${name}.yml`).toString();
}
