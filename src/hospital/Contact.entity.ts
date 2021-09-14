import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Contact", { schema: "public" })
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  detail: string;
}
