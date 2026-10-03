import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity.js';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

export interface IBookRepository {
    create(book: Book): Promise<void>;
    update(book: Book): Promise<void>;
    findAll(): Promise<Book[]>;
    findById(id: string): Promise<Book>;
}

@Injectable()
export class BookTypeOrmRepository implements IBookRepository {
    constructor(
        @InjectRepository(Book)
        private typeOrmRepo: Repository<Book>
    ) {}

    async create(book: Book): Promise<void>{
        await this.typeOrmRepo.save(book);
    }

    async update(book: Book): Promise<void>{
        await this.typeOrmRepo.save(book);
    }

    findAll(): Promise<Book[]> {
        return this.typeOrmRepo.find();
    }

    findById(id: string): Promise<Book> {
        return this.typeOrmRepo.findOneOrFail(
            { where: { id }}
        )
    } 

    
}