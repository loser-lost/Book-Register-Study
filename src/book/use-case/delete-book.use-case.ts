import { Inject, Injectable } from "@nestjs/common";
import type { IBookRepository } from "../repository/book.repository.js";


@Injectable()
export class EditBookUseCase{

    constructor(
        @Inject('IBookRepository')
        private readonly bookRepo: IBookRepository
    ){}

    async execute(id: string, input: any){
        const bookEdit = await this.bookRepo.findById(id)

        if (input.title){
            bookEdit.updateTitle(input.title);
        }
        if (input.autor){
            bookEdit.updateAuthor(input.autor)
        }
        if (input.is_available){
            bookEdit.updateAvailability(input.is_available)
        }
        if (input.created_at){
            bookEdit.updateCreatedAt(input.created_at)
        }
        await this.bookRepo.update(bookEdit)
        return bookEdit;

    }
}