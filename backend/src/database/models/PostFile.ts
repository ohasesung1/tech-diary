import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

// 게시글 모델 구성
@Entity()
export class PostFile extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  idx: number;

  @Column({ type: 'varchar', length: 100})
  name: string;

  @Column({ type: 'int' })
  postIdx: number;

  @Column({ type: 'varchar', length: 20 })
  extend: string;
}