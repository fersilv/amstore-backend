/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { ConfigFormaPagamento } from './entities/config-forma-pagamento.entity';
import { FormaPagamento } from './entities/forma-pagamento';
import { Transacao } from 'src/transacao/entities/transacao.entity';
import { Servico } from 'src/servico/entities/servico.entity';
import { ServicoPedido } from 'src/servico-pedido/entities/servico-pedido.entity';
import { AxiosClientService } from 'src/axios-client/axios-client.service';
import { AxiosClientModule } from 'src/axios-client/axios-client.module';
import { MercadoPagoModule } from 'src/mercado-pago/mercado-pago.module';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { HistoricoTransacao } from 'src/transacao/entities/historico-transcao.entity';
import { ServicoSeguimentado } from 'src/servico-seguimentado/entities/servico-seguimentado.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FormaPagamento,
      ConfigFormaPagamento,
      Pedido,
      Servico,
      ServicoPedido,
      Transacao,
      FormaPagamento,
      Cliente,
      HistoricoTransacao,
      ServicoSeguimentado
    ]),
    AxiosClientModule,
    MercadoPagoModule
  ],
  controllers: [PedidoController],
  providers: [PedidoService],
  exports: [PedidoService]
})
export class PedidoModule { }
