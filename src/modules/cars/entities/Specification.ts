import { v4 as uuidv4 } from "uuid";

class Specification {
  // classe especificações com nome descrição e data

  id?: string;

  name: string;

  description: string;

  created_at: Date;

  constructor() {
    // construtor fazendo a verificação do id
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Specification };
