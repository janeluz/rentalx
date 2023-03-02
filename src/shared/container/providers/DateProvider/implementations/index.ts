import { container } from 'tsyringe';
import { IMailProvider } from '../../MailProvider/IMailProvider';
import { EtherealMailProvider } from '../../MailProvider/implementations/EtherealMailProvider';
import { IDateProvider } from '../IDateProvider';
import { DayjsDateProvider } from './DayjsDateProvider';


container.registerSingleton<IDateProvider>(
  'DayjsDateProvider', 
  DayjsDateProvider);

  
container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
   new EtherealMailProvider()
);

