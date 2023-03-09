import { IStorageProvider } from "../IStorageProvider";
import fs from 'fs';
import path, { resolve } from "path"; 
import uploadConfig from "@config/uploadConfig";

class LocalStorageProvider implements IStorageProvider{
  async save(file: string, folder:string): Promise<string> {
    await fs.promises.rename(
      resolve(uploadConfig.tmpFolder, file),
      resolve(`${uploadConfig.tmpFolder}/${folder}`, file
    ));
    return file;
  }

   
  async delete(file: string, folder:string): Promise<void> {
    const filename = resolve(`${uploadConfig.tmpFolder}/${folder}`, file);

    try{
      await fs.promises.stat(filename);
    } catch {
      return;
    }
    await fs.promises.unlink(filename);
}
}
export { LocalStorageProvider };