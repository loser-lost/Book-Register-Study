import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller.js';
import { CreateUserUseCase } from './use-case/create-user.use-case.js';
import { UserTypeOrmRepository } from './repository/user.repository.js';
import { User } from './entities/user.entity.js';
import { FindAllUsersUseCase } from './use-case/find-all-user.use-case.js';
import { FindOneUsersUseCase } from './use-case/find-one-user.use-case.js';
import { EditUserUseCase } from './use-case/edit-user.use-case.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importa o repositório nativo do TypeORM
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindOneUsersUseCase,
    EditUserUseCase,
    UserTypeOrmRepository, // Registra a implementação concreta
    {
      provide: 'IUserRepository', // Token idêntico ao do UseCase
      useClass: UserTypeOrmRepository, // Usa useClass em vez de useExisting
    },
  ],
})
export class UserModule {}