import { ICreateUserTokenDto } from '../dtos/ICreateUserTokenDTO';
import { UserTokens } from '../entities/UsersToken';

interface IUsersTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDto): Promise<UserTokens>;
}

export { IUsersTokensRepository };
