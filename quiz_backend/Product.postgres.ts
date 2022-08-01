import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, DeleteDateColumn } from "typeorm"

// 테이블 생성기
@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") // https://www.tutorialspoint.com/typeorm/typeorm_entity.htm
  _id!: string

  @Column({ type: "text" })
  seller!: string

  @Column({ type: "text" })
  name!: string

  @Column({ type: "text" })
  detail!: string

  @Column({ type: "text" })
  price!: number

  @CreateDateColumn()
  createdAt!: Date

  @DeleteDateColumn()
  deletedAt!: Date
}
