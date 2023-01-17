import { hash } from 'bcryptjs';

<<<<<<< HEAD
import { v4 as uuidV4} from "uuid";
import { createConnection } from "..";
=======
import { v4 as uuidV4 } from 'uuid';
import { createConnection } from '../data-source';
>>>>>>> 0ea9965674111ab39f285dc2066aa5bcb281d813
// criamos um seed(um usuário criado manualmente comom administrador)

async function create() {
  // criando conexão
  const connection = createConnection();

  const id = uuidV4();
  const password = await hash('admin', 8);

  (await connection).query(
    `INSERT INTO USERS(id,name,email,password,admin,created_at,driver_license) values('${id}','isAdmin', 'admin@rentalx.com.br','${password}', 'true', 'now()', 'XXXXXX')`,
  );
  (await connection).destroy;
}

create().then(() => console.log('User admin created!'));
