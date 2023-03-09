import { IStorageProvider } from "./IStorageProvider";
import { S3 } from "aws-sdk";
import { resolve } from "path";
import uploadConfig from "@config/uploadConfig";
import fs from "fs";

class S3StorageProvider implements IStorageProvider{
  private client: S3;
  constructor() {
    this.client = new S3({
      region: process.env.AWS_BUCKET_REGION
    });
  }
  async save(file: string, folder: string): Promise<string> {
    const originalName = resolve(uploadConfig.tmpFolder, file);

    const fileContent = await fs.promises.readFile(originalName);

    await this.client.putObject({
      Bucket: `${process.env.AWS_BUCKET}/${folder}`,
      Key: file,
      ACL: "public-read",
      Body: fileContent,
      ContentType: "image/jpeg"

  }).promise();

  await fs.promises.unlink(originalName);

  return file;
}


 async delete(file: string, folder: string): Promise<void> {
    await this.client.deleteObject({
      Bucket: `${process.env.AWS_BUCKET}/${folder}`,
      Key: file
  }).promise();
}
}

export { S3StorageProvider };