import { Repository } from 'typeorm';

import { ICreateUserTokenDto } from '../../../dtos/ICreateUserTokenDTO';
import { UserTokens } from '../entities/UsersToken';
import { IUsersTokensRepository } from '../../../repositories/IUsersTokensRepository';
import { AppDataSource } from '@shared/infra/typeorm/data-source';

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserTokens);
  }
     
  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDto): Promise<UserTokens> {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id,
    });
    await this.repository.save(userToken);
    return userToken;
  }
  async findByUserIdAndRefreshToken(user_id: string,refresh_token:string): Promise<UserTokens> {
   const userTokens = await this.repository.findOne({
    user_id,
    refresh_token,
    });
    return userTokens;
  }
  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
export { UsersTokensRepository };
