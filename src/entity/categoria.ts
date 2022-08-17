import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("tb_categoria")
export class categoria {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    descricao: string
}