import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BookController } from './book.controller.js';
import { Book } from './entities/book.entity.js';
import { CreateBookUseCase } from './use-case/create-book.use-case.js';
import { BookTypeOrmRepository } from './repository/book.repository.js';
import { FindAllBookUseCase } from './use-case/find-all-book.use-case.js';
import { FindOneBookUseCase } from './use-case/find-One-book.use-case.js';
import { EditBookUseCase } from './use-case/delete-book.use-case.js';
import { DeleteBookUseCase } from './use-case/edit-book.use-case copy.js';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [
    CreateBookUseCase,
    FindAllBookUseCase,
    FindOneBookUseCase,
    EditBookUseCase,
    DeleteBookUseCase,
    {
        provide: 'IBookRepository', // Token idêntico ao do UseCase
        useClass: BookTypeOrmRepository, // Usa useClass em vez de useExisting
    }
  ],
  exports: ['IBookRepository']
})
export class BookModule {}
