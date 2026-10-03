import { Inject, Injectable } from "@nestjs/common";
import type { IBookRepository } from "../repository/book.repository.js";
import { CreateBookDto } from "../dto/create-book.dto.js";
import { Book } from "../entities/book.entity.js";


@Injectable()
export class FindOneBookUseCase {

    constructor(
        @Inject('IBookRepository')
        private readonly bookRepo: IBookRepository,
    ){}

    execute(id: string){
        return this.bookRepo.findById(id);
    }
}