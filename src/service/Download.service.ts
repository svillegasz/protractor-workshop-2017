import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';

const dir = `${__dirname}/../../../temp`;
const agent = require('superagent-promise')(require('superagent'), Promise);

export class DownloadService {
  public async downloadFile(link: string, filename: string): Promise<void> {
    if (!existsSync(dir)) {
      mkdirSync(dir);
    }
    const data = await agent.get(link);
    writeFileSync(`${dir}/${filename}`, data);
  }

  public readFileFromTemp(filename: string): Buffer {
    return readFileSync(`${dir}/${filename}`);
  }
}
