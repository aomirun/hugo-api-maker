'use strict';

const {readdirSync, statSync, readFileSync, writeFileSync} = require('fs');
const {join} = require('path');

function getAllFiles(dirPath, ext) {
  function flatten(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
  }

  function scanDir(dirPath, ext) {
    const result = readdirSync(dirPath);
    if (!result.length) return [];
    return result.map((dirName) => {
      const filePath = join(dirPath, dirName);
      if (statSync(filePath).isDirectory()) {
        return scanDir(join(dirPath, dirName), ext);
      } else {
        if (!ext) return filePath;
        if (filePath.lastIndexOf(ext) === filePath.indexOf(ext) && filePath.indexOf(ext) > -1) return filePath;
        return '';
      }
    });
  }

  return flatten(scanDir(dirPath, ext)).filter((file) => file);
}

const allMarkdownFiles = getAllFiles('./public', '.json');
allMarkdownFiles.forEach((item) => {
  try {
    const jsonData = JSON.stringify(JSON.parse(readFileSync(item, 'utf8')));
    writeFileSync(item, jsonData);
  } catch (e) {
    console.error(`${item} content error.`);
    // writeFileSync(item, JSON.stringify({code: 500, desc: 'Unexpected token'}));
  }
});
