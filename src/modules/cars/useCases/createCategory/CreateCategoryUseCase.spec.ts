import { AppError } from '@shared/errors/AppError';
import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/in-memory/CategoriesReposityInMemory';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

// vai agrupar os testes
describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory,
    );
  });
  // isso deve ser capaz de criar uma nova categoria
  it('should be  able to create a new category', async () => {
    const category = {
      name: 'Category Test',
      description: ' Category description Test',
    };
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name,
    );
    // Eu espero que a nossa categoria tenha um id
    console.log(categoryCreated);
    expect(categoryCreated).toHaveProperty('id');
  });

  // isso não deve ser capaz de criar uma categoria que já existe
  it('should  not be  able to create a new category with name exists', async () => {
    expect(async () => {
      const category = {
        name: 'Category Test',
        description: ' Category description Test',
      };
      // aqui vai salvar a categoria pq ela não existe
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
      // aqui vai dar o erro pq a categoria foi criada na função anterior
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
