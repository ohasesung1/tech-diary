import { Entity, BaseEntity, PrimaryColumn, Column } from "typeorm";


@Entity()
export class Member extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 50, unique: true })
  memberId: string;

  @Column({ type: 'varchar', length: 1000 })
  pw: string;

  @Column({ type: 'int' })
  access_level: number;

  @Column({ type: 'text' })
  profile_image: string;
}