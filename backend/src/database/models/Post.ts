import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  idx: number;

  @Column({ type: 'varchar', length: 50})
  title: string;

  @Column({ type: 'varchar', length: 3000, })
  contents: string;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  create_time: string;

  @Column({ type: 'text', nullable: true })
  thumbnail_address: string;
}