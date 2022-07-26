import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number

  @Column({ type: "text" })
  writer!: string

  @Column({ type: "text" })
  title!: string

  @Column({ type: "text" })
  contents!: string
}
