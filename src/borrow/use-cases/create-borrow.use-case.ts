import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import type { IBorrowRepository } from "../repository/borrow.repository.js";
import type { IBookRepository } from "../../book/repository/book.repository.js";
import type { IUserRepository } from "../../user/repository/user.repository.js";
import { Borrow } from "../entities/borrow.entity.js";

@Injectable()
export class CreateBorrowUseCase {
    constructor(
        @Inject('IBorrowRepository')
        private readonly borrowRepo: IBorrowRepository,

        @Inject('IUserRepository')
        private readonly userRepo: IUserRepository,

        @Inject('IBookRepository')
        private readonly bookRepo: IBookRepository,
         
    ){}

    async execute(input: {user_id: string, book_id: string}){
        const user = await this.userRepo.findById(input.user_id);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        const book = await this.bookRepo.findById(input.book_id);
        if (!book) {
            throw new NotFoundException('Book not found');
        }
        const borrow = Borrow.create(input.user_id, input.book_id)

        await this.borrowRepo.create(borrow);
        return borrow;
    }
}
