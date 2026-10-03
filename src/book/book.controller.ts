import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';
import { CreateBookUseCase } from './use-case/create-book.use-case.js';
import { FindAllBookUseCase } from './use-case/find-all-book.use-case.js';
import { FindOneBookUseCase } from './use-case/find-One-book.use-case.js';
import { EditBookUseCase } from './use-case/delete-book.use-case.js';
import { DeleteBookUseCase } from './use-case/edit-book.use-case copy.js';

@Controller('book')
export class BookController {
  constructor(
    private readonly createBookUseCase: CreateBookUseCase,

    private readonly findAllBookUseCase: FindAllBookUseCase,

    private readonly findOneBookUseCase: FindOneBookUseCase,

    private readonly updateBookUseCase: EditBookUseCase,

    private readonly deleteBookUseCase: DeleteBookUseCase
  ) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.createBookUseCase.execute(createBookDto);
  }

  @Get()
  findAll() {
    return this.findAllBookUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneBookUseCase.execute(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.updateBookUseCase.execute(id, updateBookDto);
  }

  @Patch(':id/delete')
  updateDeleteStatus(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.deleteBookUseCase.execute(id, updateBookDto);
  }
}
