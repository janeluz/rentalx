import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase"

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory : CarsRepositoryInMemory;

describe("List Cars", () => {
 
    beforeEach(()=> {

      carsRepositoryInMemory = new CarsRepositoryInMemory();
      listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    });

    it("should be able to list all available cars", async () => {

      const car = await carsRepositoryInMemory.create({
        "name": "Car2 ",
        "description": "Car description",
        "daily_rate": 140.00,
        "license_plate":"DEF-1212",
        "fine_amount": 100,
        "brand": "Car_brand",
        "category_id" :"category_id"
      });
      const cars = await listCarsUseCase.execute({});
      //eu espero que o que retorne seja um array com esse carro que foi criado
      expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by name", async() => {
    const car = await carsRepositoryInMemory.create({
      "name": "Car1 ",
      "description": "Car description",
      "daily_rate": 140.00,
      "license_plate":"DEF-1212",
      "fine_amount": 100,
      "brand": "Car_brand_test",
      "category_id" :"category_id"
    });
    const cars = await listCarsUseCase.execute({
      brand:"Car_brand",
    });
    //eu espero que o que retorne seja um array com esse carro que foi criado
    expect(cars).toEqual([car]);
  })
});