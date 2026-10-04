export class CreateBorrowDto {
    user_id: string;
    book_id: string;
    borrowed_at: Date;
    returned_at: Date | null;
}
