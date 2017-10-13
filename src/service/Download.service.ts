import { superagent } from 'superagent';
import { createWriteStream } from 'fs';

const dir = 'temp';

export class DownloadService {
    public async downloadFile(link: string, file: string): Promise<void> {
        const readmeFile = createWriteStream(`${dir}/${file}`);
        return superagent.get(link).pipe(readmeFile);
    }
}
