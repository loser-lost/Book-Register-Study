import { Injectable } from "@nestjs/common";
import { Borrow } from "../entities/borrow.entity.js";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

export interface IBorrowRepository {
    create(borrow: Borrow): Promise<void>;
    update(borrow: Borrow): Promise<void>;
    findAll():  Promise<Borrow[]>
    findById(id: string): Promise<Borrow>;
}

@Injectable()
export class BorrowTypeOrmRepository implements IBorrowRepository{
    
    constructor(
        @InjectRepository(Borrow)
        private readonly typeOrmRepo: Repository<Borrow>
    ){}

    async create(borrow: Borrow): Promise<void>{
        await this.typeOrmRepo.save(borrow);
    }

    async update(borrow: Borrow): Promise<void>{
        await this.typeOrmRepo.save(borrow);
    }

    findAll(): Promise<Borrow[]>{
        return this.typeOrmRepo.find();
    }

    findById(id: string): Promise<Borrow> {
        return this.typeOrmRepo.findOneOrFail({
            where: { id}
        })    
    }
}