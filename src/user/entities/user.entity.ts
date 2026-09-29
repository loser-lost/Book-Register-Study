import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryColumn()
    id: string; 

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ select: false })
    password: string;

    @Column()
    created_at: Date;

    
    constructor(props: {
        name: string,
        email: string,
        password: string,
        created_at: Date,
    }, id?: string,

    ) {
        if (props) {
            Object.assign(this, props);
        }
        
        // Define a ID se não for gerada/passada
        this.id = id ?? crypto.randomUUID();
    }

}
