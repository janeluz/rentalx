import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject } from "tsyringe";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUserResponseDTO } from "@modules/accounts/dtos/IUserResponseDTO";
import { UserMap } from "@modules/accounts/mapper/UserMap";

class ProfileUserUseCase {
  
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  
  async execute(id: string): Promise<IUserResponseDTO> {
  
    const user = await this.usersRepository.findById(id);
  
    return UserMap.toDTO(user);
  }
  
}

export { ProfileUserUseCase };