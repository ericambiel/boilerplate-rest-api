import Buffer from 'buffer';
import fs from 'fs';
import path from 'path';
import { singleton } from 'tsyringe';
import ConsoleLog from '@libs/ConsoleLog';
import { api } from '@configs/*';

@singleton()
export default class FileHandlerHelper {
  private readonly API_CONFIG = api();

  // TODO: Use path to verify correct S.O.
  async readFile(filePath: string): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) reject(err);
        ConsoleLog.print(
          `Reading file: ${filePath}`,
          'info',
          'FILE_HANDLER',
          this.API_CONFIG.SILENT_MODE,
        );
        resolve(data);
      });
    });
  }

  // TODO: Use path to verify correct S.O.
  async readDir(filePath: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      fs.readdir(filePath, (err, files) => {
        if (err) reject(err);
        ConsoleLog.print(
          `Reading files in: ${filePath}`,
          'info',
          'FILE_HANDLER',
          this.API_CONFIG.SILENT_MODE,
        );
        resolve(files);
      });
    });
  }

  // TODO: Use path to verify correct S.O.
  async writeFile(filePath: string, data: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      fs.writeFile(filePath, data, err => {
        if (err) reject(err);
        ConsoleLog.print(
          `File are storing to: ${filePath}`,
          'info',
          'FILE_HANDLER',
          this.API_CONFIG.SILENT_MODE,
        );
        resolve();
      });
    }).catch(err => {
      ConsoleLog.print(
        `Error in write to a file: ${err}`,
        'error',
        'FILE_HANDLER',
      );
      throw new Error(`Error in write to a file: ${err}`);
    });
  }

  // TODO: Use path to verify correct S.O.
  async readJSONFilesInDir(filePath: string) {
    // Looking for files in directory
    const filesInPath: string[] = await this.readDir(filePath);

    // Filter only json files
    const filteredJSONFilesPath = filesInPath
      .filter(nameFile => path.extname(nameFile) === '.json')
      .map(nameFile => path.join(filePath, nameFile));

    return Promise.all(
      filteredJSONFilesPath.map(filterJSONFilePath =>
        // Read files and convert to JSON to Object
        this.readFile(filterJSONFilePath)
          .then(data => JSON.parse(data.toString()))
          .catch((err: Error) => {
            ConsoleLog.print(
              {
                message: `Parse error: "${err.message}", in read file: ${filterJSONFilePath}`,
                stack: err.stack,
              },
              'error',
              'FILE_HANDLER',
            );
          }),
      ),
    );
  }
}
