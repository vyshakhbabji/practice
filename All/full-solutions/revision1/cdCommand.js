// Given current directory and change directory path, return final path.

function cd(currentDirectory, changeDirectory) {
  const currentDir = currentDirectory.split('/');
  const changeDir = changeDirectory.split('/');

  const finalDir = [];
  for (let i = 0; i < changeDir.length; i++) {
    if (changeDir[i] === '..') {
      finalDir.pop();
    } else if (changeDir[i] === '.') {
      continue;
    } else {
      finalDir.push(changeDir[i]);
    }
  }

  return finalDir.join('/');
}