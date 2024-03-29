import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";
import { ICreateCategoryDTO } from "./ICategoriesRepository";


interface ICarsImagesRepository {
    create (data:string ) : Promise<Car>;
    findByLicensePlate(license_plate: string) : Promise<Car>;
    findAvailable(brand?:string,category_id?:string, name?:string): Promise<Car[]>;
    findById(id: string): Promise<Car>;
}

export{ ICarsImagesRepository};