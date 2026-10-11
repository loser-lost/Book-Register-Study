import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, ManyToMany, CreateDateColumn } from "typeorm";
import { User } from "../../user/entities/user.entity.js";
import { Book } from "../../book/entities/book.entity.js";


@Entity()
export class Borrow {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => User, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column({ type: "varchar", length: 36 })
    user_id: string;

    @ManyToOne(() => Book, { onDelete: "CASCADE" })
    @JoinColumn({ name: "book_id" })
    book: Book;

    @Column()
    book_id: string;

    @CreateDateColumn({ type: "datetime"})
    borrowed_at: Date;

    @Column({ type: "datetime", nullable: true, default: null })
    returned_at: Date | null;

    constructor (props: {
        user_id: string;
        book_id: string;
        borrowed_at: Date;
        returned_at: Date | null;
    }, id?: string,
    ){
        if (props){
            Object.assign(this, props);
        }

        this.id = id ?? crypto.randomUUID();
    }

    static create( user_id: string, book_id: string,book: Book): Borrow {
        if (!user_id || !book_id){
            throw new Error("User ID and Book ID are required to create a Borrow record.");
        }

        book.markAsBorrowed();

        return new Borrow({
            user_id,
            book_id,
            borrowed_at: new Date(),
            returned_at: null,
        });
    }

    returnBook(returnedAt?: Date, book?: Book) {
        if (this.returned_at !== null) {
            throw new Error("This book has already been returned.");
        }
        this.returned_at = returnedAt ?? new Date();
        if (book) {
            book.markAsReturned();
        }
    }

    isCurrentlyBorrowed(): boolean {
        return this.returned_at === null;
    }
}
