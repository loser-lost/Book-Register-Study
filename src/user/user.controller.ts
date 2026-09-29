import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserUseCase } from './use-case/create-user.use-case.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { FindAllUsersUseCase } from './use-case/find-all-user.use-case.js';


@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findAllUserUseCase: FindAllUsersUseCase
  ) {}
  
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Get()
  findAll() {
    return this.findAllUserUseCase.execute();
  }
/*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }*/
}
