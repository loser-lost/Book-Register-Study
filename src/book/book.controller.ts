import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';
import { CreateBookUseCase } from './use-case/create-book.use-case.js';
import { FindAllBookUseCase } from './use-case/find-all-book.use-case.js';

@Controller('book')
export class BookController {
  constructor(
    private readonly createBookUseCase: CreateBookUseCase,

    private readonly findAllBookUseCase: FindAllBookUseCase
  ) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.createBookUseCase.execute(createBookDto);
  }

  @Get()
  findAll() {
    return this.findAllBookUseCase.execute();
  }
/*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this..findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }*/
}
