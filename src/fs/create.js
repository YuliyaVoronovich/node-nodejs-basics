import { promises } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesFolder = resolve(__dirname, 'files');
const fileName = 'fresh.txt';
const fileContent = 'I am fresh and young';

const create = async () => {
  try {
    await promises.writeFile(join(filesFolder, fileName), fileContent, { flag: 'wx' });
    console.log(`File ${fileName} created successfully!`);
  } catch (error) {
    if (error.code === 'EEXIST') {
      console.log('FS operation failed');
    } else {
      console.error(error.message);
    }
  }
};

await create();