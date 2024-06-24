import { ApiProperty } from "@nestjs/swagger";

export class CreateServicoDto {
    @ApiProperty(
        {
            description: 'Nome do Servico',
            example: 'Seguidores Instagram',
        }
    )
    nome: string;
    @ApiProperty(
        {
            description: 'Descrição do Servico',
            example: '1000 Seguidores Instagram',
        }
    )
    descricao: string;

    @ApiProperty(
        {
            description: 'Id do Fornecedor',
            example: '1',
        }
    )
    idFornecedor: number;

    @ApiProperty(
        {
            description: 'Id da Categoria',
            example: '1',
        }
    )
    idCategoria: number;

    @ApiProperty(
        {
            description: 'Id da Subcategoria',
            example: '1',
        }
    )
    idSubcategoria: number;

    @ApiProperty(
        {
            description: 'Id do Servico Fornecedor',
            example: '1',
        }
    )
    idServicoFornecedor: number;

    @ApiProperty(
        {
            description: 'Tipo do Servico',
            example: 'Seguidores',
        }
    )
    tipo: string;

    @ApiProperty(
        {
            description: 'Preço do Servico',
            example: '1000',
        }
    )
    preco: number;

    @ApiProperty(
        {
            description: 'Preço Promocional do Servico',
            example: '999',
        }
    )
    precoPromocional: number;

    @ApiProperty(
        {
            description: 'Minimo de Servicos',
            example: '1',
        }
    )
    min: number;

    @ApiProperty(
        {
            description: 'Maximo de Servicos',
            example: '10',
        }
    )
    max: number;

    @ApiProperty(
        {
            description: 'Multiplo do Servico',
            example: '1',
        }
    )
    multiplo: number;
    reposicao: number;
    tagSeo: string;
    status: string;
}
