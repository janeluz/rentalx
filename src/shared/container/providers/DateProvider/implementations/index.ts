
import { container } from 'tsyringe';
import { IMailProvider } from '../../MailProvider/IMailProvider';
import { EtherealMailProvider } from '../../MailProvider/implementations/EtherealMailProvider';
import { LocalStorageProvider } from '../../StorageProvider/implementations/LocalStorageProvider';
import { IStorageProvider } from '../../StorageProvider/IStorageProvider';
import { S3StorageProvider } from '../../StorageProvider/S3StorageProvider';
import { IDateProvider } from '../IDateProvider';
import { DayjsDateProvider } from './DayjsDateProvider';


container.registerSingleton<IDateProvider>(
  'DayjsDateProvider', 
  DayjsDateProvider);

  
container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
   new EtherealMailProvider()
);
const diskStorage = {
  local: LocalStorageProvider,
  s3:  S3StorageProvider
}
container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  diskStorage[process.env.disk]
)