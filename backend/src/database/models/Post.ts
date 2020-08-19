import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

// 게시글 모델 구성
@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  idx: number;

  @Column({ type: 'varchar', length: 50})
  title: string;

  @Column({ type: 'varchar', length: 3000, })
  contents: string;

  @Column({ type: 'text', nullable: true })
  thumbnail_address: string;

  @Column({ type: 'varchar', nullable: true })
  series: string;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  create_time: string;
}