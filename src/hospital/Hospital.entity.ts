import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Hospital", { schema: "public" })
export class HospitalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  explanation: string;

  @Column()
  image: string;

  @Column()
  mbti: string;
}
