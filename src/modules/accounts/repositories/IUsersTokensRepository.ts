import { ICreateUserTokenDto } from '../dtos/ICreateUserTokenDTO';
import { UserTokens } from '../infra/typeorm/entities/UsersToken';

interface IUsersTokensRepository {
  deleteById(id: string): unknown;
  
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDto): Promise<UserTokens>;
  findByUserIdAndRefreshToken(user_id: string, refresh_token:string): Promise<UserTokens>;
  deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepository };
