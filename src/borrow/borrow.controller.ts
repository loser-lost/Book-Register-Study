import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateBorrowDto } from './dto/create-borrow.dto.js';
import { UpdateBorrowDto } from './dto/update-borrow.dto.js';
import { CreateBorrowUseCase } from './use-cases/create-borrow.use-case.js';

@Controller('borrow')
export class BorrowController {
  constructor(
    private readonly createBorrowUseCase: CreateBorrowUseCase) {}

  @Post()
  create(@Body() createBorrowDto: CreateBorrowDto) {
    return this.createBorrowUseCase.execute(createBorrowDto);
  }
/* 
  @Get()
  findAll() {
    return this.borrowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.borrowService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBorrowDto: UpdateBorrowDto) {
    return this.borrowService.update(+id, updateBorrowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.borrowService.remove(+id);
  }
*/}
