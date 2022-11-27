import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { createConnection } from '../data-source';

// export default async (): Promise<DataSource> => {
//   const defaultOptions =  DataSource;

//   return createConnection(
//     Object.assign(defaultOptions, {
//       database:
//         process.env.NODE_ENV === 'test'
//           ? 'rentx_test'
//           : defaultOptions.database,
//     }),
//   );
// };
