import { Module } from '@nestjs/common';
import { BorrowController } from './borrow.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Borrow } from './entities/borrow.entity.js';
import { UserModule } from '../user/user.module.js';
import { BookModule } from '../book/book.module.js';
import { CreateBorrowUseCase } from './use-cases/create-borrow.use-case.js';
import { BorrowTypeOrmRepository } from './repository/borrow.repository.js';

@Module({
  
  imports:[
    TypeOrmModule.forFeature([Borrow]),
    UserModule, // 👈 Dá acesso ao 'IUserRepository'
    BookModule, // 👈 Dá acesso ao 'IBookRepository'
  ],
  controllers: [BorrowController],
  providers: [
    CreateBorrowUseCase,
    {
      provide: 'IBorrowRepository', // Token idêntico ao do UseCase
      useClass: BorrowTypeOrmRepository, // Usa useClass em vez de useExisting
    },
  ],
  
})
export class BorrowModule {}
