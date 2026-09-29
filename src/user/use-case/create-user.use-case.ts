import { CreateUserDto } from "../dto/create-user.dto.js";
import { User } from "../entities/user.entity.js";
import { Inject, Injectable } from "@nestjs/common";
import type { IUserRepository } from "../repository/user.repository.js";


//Um use case representa a intenção de um usuario
@Injectable()
export class CreateUserUseCase {

    constructor(
        @Inject('IUserRepository')
        private readonly userRepo: IUserRepository,
    ) { }

    async execute(input: CreateUserDto) {
        const user = new User(input)
        await this.userRepo.create(user);
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;// retorno no entanto deve retornar tudo menos o password
    }

}