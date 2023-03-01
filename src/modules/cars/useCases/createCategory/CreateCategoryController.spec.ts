import { app } from '@shared/infra/http/app';
import request from 'supertest';

import { createConnection } from '@shared/infra/typeorm/data-source';



describe('Create Category Controller', () => {
  beforeEach(async () => {
    createConnetion = await createConnection();
  });

  it('should be able to create a new category', async () => {
    const response = await request(app).post('/categories').send({
      name: 'Category Supertest',
      description: 'Category Supertest',
    });
    expect(response.status).toBe(201);
  });
});
