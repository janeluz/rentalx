import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { CreateCarSpecificationUseCase } from './createCarSpecificationUseCase';


let createCarSpecificationUseCase : CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('create Car Specification', () => {
  beforeEach(() => { 
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory);
  });
  it('should not be able to add a new specification to a now-existent car',async () => {
    expect(async () => {
      const car_id = '1234';
      const specifications_id = ['54321'];
  
      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id
      });
    }).rejects.toBeInstanceOf(AppError);
    
  });
  it('should be able to add a new specification to the car',async () => {
    
    const car_id = '1234';
    const specifications_id = ['54321'];

    await createCarSpecificationUseCase.execute({car_id,specifications_id});
  });
});
