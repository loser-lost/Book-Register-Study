import { Injectable, Inject } from "@nestjs/common";
import type { IUserRepository } from "../repository/user.repository.js";
import { UpdateUserDto } from "../dto/update-user.dto.js";

@Injectable()
export class EditUserUseCase{
    constructor(
        @Inject('IUserRepository')
        private readonly userRepo: IUserRepository
    ){}

    async execute(id: string, input: UpdateUserDto){
        const userEdit = await this.userRepo.findById(id)
        if (input.name!){
            userEdit.updateName(input.name);
        }
        if (input.email){
            userEdit.updateEmail(input.email)
        }
        if (input.created_at){
            userEdit.updateCreated_at(input.created_at)
        }

        await this.userRepo.update(userEdit)
        return userEdit;
    }
}