import { ICreateRentalDTO } from "@modules/rentals/dtos/IRentalsDto";
import { Rental } from "../typeorm/entities/Rental";

interface IRentalsRepository {
  findById(id: string): unknown;
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
  create(data: ICreateRentalDTO): Promise<Rental>;

}

export { IRentalsRepository };
