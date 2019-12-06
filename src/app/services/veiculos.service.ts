import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private veiculos: Veiculos[] = [
    {
      title: 'Volvo VERA',
      content: 'Ideal para operações regulares e repetitivas: com distâncias curtas, grandes volumes de mercadorias e alta precisão na entrega, como o transporte entre centros logísticos.',
      imgUrl: 'assets/images/vera.jpg'
    },
    {
      title: 'Tesla S',
      content: 'Todos os novos carros da Tesla são fornecidos de fábrica com hardware avançado capaz de fornecer recursos de piloto automático hoje e recursos completos de direção automática no futuro - através de atualizações de software projetadas para melhorar a funcionalidade ao longo do tempo.',
      imgUrl: 'assets/images/models.jpg'
    },
    {
      title: 'Tesla Model 3',
      content: 'Todos os novos carros da Tesla são fornecidos de fábrica com hardware avançado capaz de fornecer recursos de piloto automático hoje e recursos completos de direção automática no futuro - através de atualizações de software projetadas para melhorar a funcionalidade ao longo do tempo.',
      imgUrl: 'assets/images/model3.jpg'
    },
    {
      title: 'Tesla Model X',
      content: 'O modelo X é um dos SUVs mais seguros de todos os tempos. Construído a partir do zero como veículo elétrico, a carroceria, o chassi, as restrições e a tecnologia da bateria oferecem uma probabilidade muito baixa de ferimentos nos ocupantes.',
      imgUrl: 'assets/images/modelx.jpg'
    },
    {
      title: 'MOTOROiD',
      content: 'Por meio da tecnologia AMCES, o veículo de duas rodas consegue recolher o pezinho, levantar e ir até o seu dono, sozinha, desde que em baixas velocidades.',
      imgUrl: 'assets/images/motoroid.jpg'
    },
    {
      title: 'AUTONOM SHUTTLE',
      content: 'Autônomo, sem motorista e elétrico: o ônibus desenvolvido pela NAVYA atende cidades e locais privados, trazendo ainda mais mobilidade.',
      imgUrl: 'assets/images/shuttle.jpg'
    },
    {
      title: 'AUTONOM CAB',
      content: 'Primeiro taxi robotizado do mercado. Autônomo, personalizado e compartilhado, esta solução de mobilidade exclusiva fornece uma resposta aos principais desafios da mobilidade urbana.',
      imgUrl: 'assets/images/cab.jpg'
    },
    {
      title: 'Scania AXL',
      content: 'A Scania já tem caminhões autônomos em operações reais, como nos testes que realiza em parceria com a Rio Tinto em uma mina de sal na Austrália. Até agora, porém, os modelos operam com um condutor de segurança a bordo que pode intervir, caso seja necessário.',
      imgUrl: 'assets/images/axl.jpg'
    },
  ]

  constructor() { }

  getVeiculos() {
    return this.veiculos;
  }
}

export interface Veiculos {
  title: string;
  content: string;
  imgUrl: string;
}
