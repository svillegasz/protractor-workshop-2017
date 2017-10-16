import { readFileSync, existsSync, mkdirSync, createWriteStream } from 'fs';

const dir = `${__dirname}/../../../temp`;
const agent = require('superagent-promise')(require('superagent'), Promise);

export class DownloadService {
  public async downloadFile(link: string, filename: string): Promise<void> {
    if (!existsSync(dir)) {
      mkdirSync(dir);
    }
    const file = createWriteStream(`${dir}/${filename}`);    
    const response = await agent.get(link);
    response.pipe(file);
  }

  public readFileFromTemp(filename: string): Buffer {
    return readFileSync(`${dir}/${filename}`);
  }
}
