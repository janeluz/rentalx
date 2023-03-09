import { getRepository, Repository } from 'typeorm';

// import { dataSource } from '../../../../../shared/infra/typeorm/data-source';
import { Specification } from '../entities/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../../../repositories/ISpecificationsRepository';
import { AppDataSource } from '@shared/infra/typeorm/data-source';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
    return specification;
      
  }
  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOneBy({
      name,
    });
    return specification;
  }
  findByIds(specifications_id: string[]): Promise<Specification[]> {
    throw new Error('Method not implemented.');
  }


  
}


export { SpecificationsRepository };
