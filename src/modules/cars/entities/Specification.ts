import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("specifications")
class Specification {
  // classe especificações com nome descrição e data
  @PrimaryColumn()
  id?: string;
  @Column() // se tiver um nove diferente é so colocar ali entre parenteses
  name: string;
  @Column()
  description: string;
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    // construtor fazendo a verificação do id
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Specification };
