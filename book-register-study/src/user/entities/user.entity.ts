import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryColumn()
    id: string; 

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    created_at: Date;
}
