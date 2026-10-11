import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column({ default: true })
    is_available: boolean;

    @Column()
    created_at: Date;

    @Column({ default: false })
    deleted: boolean;


    constructor(props: {
        title: string,
        author: string,
        is_available: boolean,
        created_at: Date,
        deleted: boolean,
    }, id?: string,
    ) {
        if (props) {
            Object.assign(this, props);
        }

        this.id = id ?? crypto.randomUUID();
    }

    updateTitle(title: string) {
        if (title) {
            this.title = title;
        }
    }
    updateAuthor(author: string) {
        if (author) {
            this.author = author;
        }
    }

    updateAvailability(is_available: boolean) {
        this.is_available = is_available;
    }

    updateCreatedAt(created_at: Date) {
        if (created_at) {
            this.created_at = created_at;
        }
    }

    markAsDeleted(deleted: boolean){
        this.deleted = deleted;
    }
    
    markAsBorrowed() {
        if (!this.is_available) {
            throw new Error("Este livro já está emprestado.");
        }
        this.is_available = false;
    }

    markAsReturned() {
        this.is_available = true;
    }

}
