import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import type { IBookRepository } from "../repository/book.repository.js";
import { UpdateBookDto } from "../dto/update-book.dto.js";


@Injectable()
export class DeleteBookUseCase{

    constructor(
        @Inject('IBookRepository')
        private readonly bookRepo: IBookRepository
    ){}

    async execute(id: string, input: UpdateBookDto){
        const book = await this.bookRepo.findById(id)

        if (!book){
            throw new NotFoundException('Livro não encontrado')
        }

        if (typeof input.deleted === "boolean"){
            book.markAsDeleted(input.deleted);
        }
        

        await this.bookRepo.update(book)
        return book;


    }
}