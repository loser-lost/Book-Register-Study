import { Inject, Injectable } from "@nestjs/common";
import type { IBookRepository } from "../repository/book.repository.js";
import { CreateBookDto } from "../dto/create-book.dto.js";
import { Book } from "../entities/book.entity.js";


@Injectable()
export class FindAllBookUseCase {

    constructor(
        @Inject('IBookRepository')
        private readonly bookRepo: IBookRepository,
    ){}

    execute(){
        return this.bookRepo.findAll();
    }
}