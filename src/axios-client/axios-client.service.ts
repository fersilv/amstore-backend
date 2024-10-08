/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { link } from 'fs';

@Injectable()
export class AxiosClientService {
  constructor(private readonly axiosService: HttpService) {}
  async obterSaldo(
    url: string,
    key: string,
  ): Promise<{
    balance: string;
    currency: string;
  }> {
    try {
      const resposta = await this.axiosService.axiosRef.post(url, {
        key: key,
        action: 'balance',
      });
      return resposta.data;
    } catch (error) {
      console.log(error);
      throw new HttpException('Erro ao obter saldo do painel', 500);
    }
  }
  async oberServicos(url: string, key: string): Promise<any> {
    try {
      const resposta = await this.axiosService.axiosRef.post(url, {
        key: key,
        action: 'services',
      });
      return resposta.data;
    } catch (error) {
      console.log(error);
      throw new HttpException('Erro ao obter serviços do painel', 500);
    }
  }

  async obterUmServico(
    url: string,
    key: string,
    id: number,
  ): Promise<{
    order: number;
  }> {
    try {
      const resposta = await this.axiosService.axiosRef.post(url, {
        key: key,
        action: 'service',
        id: id,
      });
      return resposta.data;
    } catch (error) {
      console.log(error);
      throw new HttpException('Erro ao obter um serviço do painel', 500);
    }
  }

  async criarPedido(
    url: string,
    key: string,
    dados: {
      link: string;
      quantity: number;
      runs?: number;
      service: string;
      interval?: number;
    },
  ): Promise<any> {
    try {
      const resposta = await this.axiosService.axiosRef.post(url, {
        key: key,
        action: 'add',
        service: dados.service,
        link: dados.link,
        quantity: dados.quantity,
        runs: dados.runs,
        interval: dados.interval,
      });
      return resposta.data;
    } catch (error) {
      console.log(error);
      throw new HttpException('Erro ao criar pedido no painel', 500);
    }
  }

  async enviarMensagem(
    url: string,
    token: string,
    dados: { number: string; body: string },
  ): Promise<any> {
    try {
      const resposta = await this.axiosService.axiosRef.post(
        url,
        {
          ...dados,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'X-Token': token,
          },
        },
      );
      console.log('resposta', resposta.data);
      return 'OLHA O CONSOLE :V';
    } catch (error) {
      console.log(error);
      throw new HttpException('Erro ao enviar mensagem no painel', 500);
    }
  }

  async obterStatusDeServico(
    url: string,
    key: string,
    order: string,
  ): Promise<any> {
    try {
      const resposta = await this.axiosService.axiosRef.post(url, {
        key: key,
        action: 'status',
        order: order,
      });
      return resposta.data;
    } catch (error) {
      console.log(error);
      throw new HttpException('Erro ao obter um serviço do painel', 500);
    }
  }

  async post(url: string, headers: any, dados: any): Promise<any> {
    try {
      const resposta = await this.axiosService.axiosRef.post(url, dados, {
        headers: headers,
      });
      return resposta.data;
    } catch (error) {
      console.log(error);
      throw new HttpException('Erro ao enviar mensagem no painel', 500);
    }
  }

  async criarPersonalizado(
    url: string,
    key: string,
    servico: string,
    link: string,
    comentarios: string,
  ): Promise<any> {
    try {
      const resposta = await this.axiosService.axiosRef.post(url, {
        key: key,
        action: 'add',
        service: servico,
        link: link,
        comments: comentarios,
      });
      return resposta.data;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Erro ao criar servico personalizado no painel',
        500,
      );
    }
  }
}
