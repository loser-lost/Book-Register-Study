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

    @Column({ default: false })
    deleted: boolean;

    /*
    constructor(props?: Partial>,
    id?: string
  ) {
    if (props) {
      Object.assign(this, props);
    }
    this.id = id ?? this.id ?? crypto.randomUUID();
    this.deleted = this.deleted ?? false;
  }
    */
    constructor(props: {
        name: string,
        email: string,
        password: string,
        created_at: Date,
        deleted: boolean,
    }, id?: string,

    ) {
        if (props) {
            Object.assign(this, props);
        }
        
        // Define a ID se não for gerada/passada
        this.id = id ?? crypto.randomUUID();
        
    }

    //Refatorar posteriormente
    updateName(name: string) {
        if (name) {
            this.name = name;
        }
    }
    updateEmail(email: string) {
        if (email) {
            this.email = email;
        }
    }
    updateCreated_at(created_at: Date) {
        if (created_at) {
            this.created_at = created_at;
        }
    }
    markAsDeleted(deleted: boolean) {
        this.deleted = deleted;
    }

}
