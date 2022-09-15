import { Repository } from "typeorm";
import AppDataSource from "../../../../shared/data-source";
import { ICreateUserTokenDto } from "../../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../../entities/UsersToken";
import { IUsersTokensRepository } from "../IUsersTokensRepository";

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
}
export { UsersTokensRepository };
