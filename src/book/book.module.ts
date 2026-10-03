import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BookController } from './book.controller.js';
import { Book } from './entities/book.entity.js';
import { CreateBookUseCase } from './use-case/create-book.use-case.js';
import { BookTypeOrmRepository } from './repository/book.repository.js';
import { FindAllBookUseCase } from './use-case/find-all-book.use-case.js';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [CreateBookUseCase,
    FindAllBookUseCase,
    {
        provide: 'IBookRepository', // Token idêntico ao do UseCase
        useClass: BookTypeOrmRepository, // Usa useClass em vez de useExisting
    }
  ],
})
export class BookModule {}
