import { Inject, Injectable } from "@nestjs/common";
import type { IUserRepository } from "../repository/user.repository.js";

@Injectable()
export class FindOneUsersUseCase{

    constructor(
      @Inject('IUserRepository')
        private readonly userRepo: IUserRepository,
    ){}

    async execute(input: string){
        return this.userRepo.findById(input);
    }
}