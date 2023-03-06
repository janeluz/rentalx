import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";


interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByIds(specifications_id: string[]): Promise<Specification[]>;
  create({ description, name }: ICreateSpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
