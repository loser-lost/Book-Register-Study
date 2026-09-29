import { Inject, Injectable } from "@nestjs/common";
import type { IUserRepository } from "../repository/user.repository.js";

@Injectable()
export class FindAllUsersUseCase{

    constructor(
      @Inject('IUserRepository')
        private readonly userRepo: IUserRepository,
    ){}

    async execute(){
        return this.userRepo.findAll();
    }
}