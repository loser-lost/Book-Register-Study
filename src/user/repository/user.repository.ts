import { Repository } from "typeorm";
import { User } from "../entities/user.entity.js";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

export interface IUserRepository {
    create(project: User): Promise<void>;
    update(project: User): Promise<void>;
    findAll(): Promise<User[]>
    findById(id: string): Promise<User>;
}

@Injectable()
export class UserTypeOrmRepository implements IUserRepository {

    constructor(
        @InjectRepository(User)
        private typeOrmRepo: Repository<User>) {

    }
    async create(user: User): Promise<void> {
        await this.typeOrmRepo.save(user)
    }
    async update(user: User): Promise<void> {
        await this.typeOrmRepo.update(user.id, user)
    }
    findAll(): Promise<User[]> {
        return this.typeOrmRepo.find();
    }
    findById(id: string): Promise<User> {
        return this.typeOrmRepo.findOneOrFail({ where: { id } })
    }
}