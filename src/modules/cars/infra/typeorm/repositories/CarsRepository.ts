import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppDataSource } from '@shared/infra/typeorm/data-source';
// import { dataSource } from "@shared/infra/typeorm/data-source";
import { Repository } from 'typeorm';
import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = AppDataSource.getRepository(Car);
  }
  

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });
    await this.repository.save(car);

    return car;
  }
  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string,
  ): Promise<Car[]> {
    const carsQuery = await this.repository
      .createQueryBuilder('c')
      .where('available =: available', { available: true });

    if (brand) {
      carsQuery.andWhere('c.brand =: brand', { brand });

      if (name) {
        carsQuery.andWhere('c.name = : name', { name });
      }
      if (category_id)
        carsQuery.andWhere('c.category_id =: category_id', { category_id });
    }
    const cars = await carsQuery.getMany();
    return cars;
  }
  async updateAvailable(id: string, available: boolean): Promise<void> {
    await this.repository
       .createQueryBuilder()
       .update()
       .set({})
       .where('id = :id')
       .setParameters({ id })
       .execute();
   }
   findById(id: string): Promise<Car> {
     const car = this.repository.findOneBy({id});
     return car;
   }
   

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOneBy({
      license_plate,
    });
    return car;
  }
}

export { CarsRepository };
