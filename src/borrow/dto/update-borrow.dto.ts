import { PartialType } from '@nestjs/mapped-types';
import { CreateBorrowDto } from './create-borrow.dto.js';

export class UpdateBorrowDto extends PartialType(CreateBorrowDto) {}
