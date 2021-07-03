import fs from 'fs';

import { getJsonTestData, getYmlTestData } from './testData/getData';

describe('test data.tag/* .json', () => {
  it.each(
    [
      'aheui',
      'game',
      'how-to',
      'jwp',
      'latex',
      'study',
      'vim',
    ],
  )('%s .json', (filename) => {
    const output = fs.readFileSync(`./data/tag/${filename}.json`, 'utf8').toString();
    expect(output).toBe(getJsonTestData(filename));
  });
});

describe('test _data/* .yml', () => {
  it.each(
    [
      'pageMap',
      'tagCount',
      'tagMap',
    ],
  )('%s .yml', (filename) => {
    const output = fs.readFileSync(`./_data/${filename}.yml`, 'utf8').toString();
    expect(output).toBe(getYmlTestData(filename));
  });
});
