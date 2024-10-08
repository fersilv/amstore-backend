import { Fornecedor } from "src/fornecedor/entities/fornecedor.entity";
import { Seguimento } from "src/seguimento/entities/seguimento.entity";
import { TipoSeguimento } from "src/seguimento/entities/tipo-seguimento.entity";
import { Servico } from "src/servico/entities/servico.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "ServicoSeguimentado" })
export class ServicoSeguimentado {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Servico, servico => servico.servicosSeguimentados)
    idServico: Servico;

    @ManyToOne(() => TipoSeguimento, tipoSeguimento => tipoSeguimento.servicosSeguimentados)
    idTipoSeguimento: TipoSeguimento;

    @ManyToOne(() => Seguimento, seguimento => seguimento.servicosSeguimentados)
    idSeguimento: Seguimento;

    @Column({ nullable: true, type: "float" })
    preco: number;

    @Column({ nullable: true, type: "float" })
    precoPromocional: number;

    @ManyToOne(() => Fornecedor, fornecedor => fornecedor.servicos)
    idFornecedor: Fornecedor;

    @Column({ nullable: true })
    idServicoFornecedor: string;

    @DeleteDateColumn()
    deletadoEm: Date;
}
