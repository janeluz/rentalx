import { Repository } from 'typeorm';

import { dataSource } from '../../../../../shared/infra/typeorm/data-source';
import { Category } from '../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../../repositories/ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  // private static INSTANCE: CategoriesRepository;

  constructor() {
    this.repository = dataSource.getRepository(Category); /***/
  }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }
  //   return CategoriesRepository.INSTANCE;
  // }
  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
  async findByName(name: string): Promise<Category> {
    // select * from categories where = 'name' limit 1
    const category = await this.repository.findOneBy({ name });
    return category;
  }
}
export { CategoriesRepository };