import os from 'os';
import process from 'process';
import fs from 'fs';
import path from 'path';
import { PassThrough } from 'stream';

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Desktop', 'photo', folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error('Please enter a folder in photo');
  process.exit(1);
}

const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

fs.promises
  .readdir(workingDir, 'utf-8')
  .then(processFiles)
  .catch(console.error);

function processFiles(files) {
  files.forEach((file) => {
    if (!path.extname(file)) {
      return;
    }
    isVideoFile(file) && move(file, videoDir);
    isCapturedFile(file) && move(file, capturedDir);
    isDuplicatedFile(file) && move(getOriginFile(file), duplicatedDir);
  });
}

function isVideoFile(file) {
  return '.mp4.mov'.includes(path.extname(file));
}

function isDuplicatedFile(file) {
  return '.jpg' === path.extname(file) && file.split('_')[1][0] === 'E';
}

function isCapturedFile(file) {
  return '.png.aae'.includes(path.extname(file));
}

function move(file, targetDir) {
  const oldPath = path.join(workingDir, file);
  if (!fs.existsSync(oldPath)) {
    return;
  }
  const newPath = path.join(targetDir, file);
  fs.promises
    .rename(oldPath, newPath)
    .then(() =>
      console.info(`move ${file} to ${path.basename(targetDir)} folder`)
    )
    .catch(console.error);
}

function getOriginFile(file) {
  return file
    .split('')
    .filter((_, i) => i !== 4)
    .join('');
}
