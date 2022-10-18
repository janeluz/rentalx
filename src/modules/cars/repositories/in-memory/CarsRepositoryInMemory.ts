import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  
  cars: Car[] = [];
  
  async create({
    brand,
    category_id,
    name,
    description,
    daily_rate,
    fine_amount,
    license_plate,
  }:ICreateCarDTO): Promise<Car> {
  const car = new Car();
  Object.assign(car, {
    brand,
    category_id,
    name,
    description,
    daily_rate,
    fine_amount,
    license_plate,
  });
  this.cars.push(car);
  return car;
}
async findByLicensePlate(license_plate: string): Promise<Car> {
  return this.cars.find((car )=> car.license_plate === license_plate);
}
async findAvailable(): Promise<Car[]> {
    const cars = this.cars.filter(car => car.available === true)
    return cars;
}
}
 export { CarsRepositoryInMemory };