import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { dataSource } from "@shared/infra/typeorm";
// import { dataSource } from "@shared/infra/typeorm/data-source";
import { getRepository, Repository } from "typeorm";
import { Car } from "../entities/Car";


class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor(){
    this.repository =dataSource.getRepository(Car);
  }
  findAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]> {
    throw new Error("Method not implemented.");
  }
  findByLicensePlate(license_plate: string): Promise<Car> {
    throw new Error("Method not implemented.");
  }

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO) : Promise<Car> {
    const car = this.repository.create({
      name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
    });
    return car;
  }

  }


export{ CarsRepository };
