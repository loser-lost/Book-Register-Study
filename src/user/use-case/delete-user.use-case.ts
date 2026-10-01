import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import type { IUserRepository } from "../repository/user.repository.js";
import { UpdateUserDto } from "../dto/update-user.dto.js";

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject("IUserRepository")
    private readonly userRepo: IUserRepository
  ) {}

  async execute(id: string, input: UpdateUserDto) {
    const user = await this.userRepo.findById(id);

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    if (typeof input.deleted === "boolean") {
      user.markAsDeleted(input.deleted);
    }

    await this.userRepo.update(user);
    return user;
  }
}