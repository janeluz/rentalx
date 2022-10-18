import { hash } from "bcryptjs";
import  createConnection  from "./index";
;
import { v4 as uuidV4} from "uuid";


async function create() {

  const connection =  await createConnection();

  const id = uuidV4();
  const password = await hash('admin', 8);

  await connection.query(
    
   `INSERT INTO USERS(id,name,email,password,admin,created_at,driver_license) values('${id}','isAdmin', 'admin@rentalx.com.br','${password}', 'true', 'now()', 'XXXXXX')`
  );
   connection.destroy;
}

create().then(() => console.log("User admin created!"));
