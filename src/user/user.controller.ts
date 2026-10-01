import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserUseCase } from './use-case/create-user.use-case.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { FindAllUsersUseCase } from './use-case/find-all-user.use-case.js';
import { FindOneUsersUseCase } from './use-case/find-one-user.use-case.js';
import { EditUserUseCase } from './use-case/edit-user.use-case.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { DeleteUserUseCase } from './use-case/delete-user.use-case.js';


@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findAllUserUseCase: FindAllUsersUseCase,
    private readonly findOneUsersUseCase: FindOneUsersUseCase,
    private readonly editUserUseCase: EditUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}
  
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Get()
  findAll() {
    return this.findAllUserUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneUsersUseCase.execute(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.editUserUseCase.execute(id, updateUserDto);
  }

  @Patch(':id/delete')
  UpdateDeleteUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.deleteUserUseCase.execute(id, updateUserDto);
  }
}
