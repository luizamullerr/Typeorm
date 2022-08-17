import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { categoria } from "./categoria"



@Entity("tb_produto")
export class produto {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    descricao: string
    @Column()
    preco: string
    @Column()
    estoque: string

    @OneToOne(() => categoria)
    @JoinColumn({name:'id_categoria'})
    categoria: categoria
}
